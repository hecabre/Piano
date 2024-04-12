import { createContext, useContext, useEffect, useState } from "react";
import {
  loginRequest,
  registerRequest,
  loginTutorRequest,
  registerTutorRequest,
  verifyTokenRequest,
  addChild,
} from "../api/auth";
import Cookies from "js-cookie";

export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [isTutor, setIsTutor] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [loading, setLoading] = useState(true);

  const signup = async (user) => {
    user.age = parseInt(user.age);
    const res = await registerRequest(user);
    console.log(res.data);
    setUserData(res.data);
  };

  const signin = async (user) => {
    try {
      const res = await loginRequest(user);
      console.log(res.data);
      setUserData(res.data);
      if (!res.data.error) {
        setIsAuthenticated(true);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const signinTutor = async (user) => {
    try {
      user.age = parseInt(user.age);
      const res = await loginTutorRequest(user);

      setUserData(res.data);
      if (!res.data.error) {
        setIsAuthenticated(true);
        setIsTutor(true);
      }
      return res;
    } catch (e) {
      return true;
    }
  };

  const signupTutor = async (user) => {
    try {
      user.age = parseInt(user.age);
      const res = await registerTutorRequest(user);
      setUserData(res.data);
      return res;
    } catch (e) {
      return true;
    }
  };
  const registerChild = async (emails) => {
    try {
      const res = await addChild(emails);
      console.log("antes del json", res);

      if (res.data.error) {
        setUserData((prevUserData) => ({
          ...prevUserData,
          error: res.data.error,
        }));
        return res.data.error;
      }

      setUserData((prevUserData) => ({
        ...prevUserData,
        ...res.data,
      }));

      return res;
    } catch (error) {
      console.error("Error en registerChild:", error);
      setUserData((prevUserData) => ({
        ...prevUserData,
        error: "Error al registrar al hijo",
      }));
      return true;
    }
  };

  useEffect(() => {
    async function checkLogin() {
      const cookies = Cookies.get();
      if (!cookies.token) {
        setIsAuthenticated(false);
        setLoading(false);
        return setUserData(null);
      }
      try {
        const res = await verifyTokenRequest(cookies.token);
        if (!res.data) {
          setIsAuthenticated(false);
          setLoading(false);
          return;
        }
        setIsAuthenticated(true);
        setUserData(res.data);
        setLoading(false);
      } catch (e) {
        console.log(e);
        setLoading(false);
        setIsAuthenticated(false);
        setIsTutor(false);
        setUserData(false);
      }
    }
    checkLogin();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signup,
        userData,
        isAuthenticated,
        isTutor,
        loading,
        signin,
        signinTutor,
        registerChild,
        signupTutor,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
