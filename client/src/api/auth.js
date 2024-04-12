import axios from "./axios";

export const registerRequest = async (user) => {
  try {
    const response = await axios.post(`register`, user);
    return response;
  } catch (error) {
    console.error("Error al realizar la solicitud de registro:", error);
    if (error.response) {
      console.error("Respuesta del servidor:", error.response.data);
    }
    throw error;
  }
};

export const loginRequest = async (user) => {
  try {
    const response = await axios.post(`login`, user);
    return response;
  } catch (error) {
    console.error("Error al realizar la solicitud de registro:", error);
    if (error.response) {
      console.error("Respuesta del servidor:", error.response.data);
    }
    throw error;
  }
};

export const registerTutorRequest = async (user) => {
  try {
    const response = await axios.post("tutor/register", user);
    console.log(response);
    return response;
  } catch (error) {
    console.error("Error al realizar la solicitud de registro:", error);
    if (error.response) {
      console.error("Respuesta del servidor:", error.response.data);
    }
    throw error;
  }
};

export const loginTutorRequest = async (user) => {
  try {
    const response = await axios.post(`tutor/login`, user);
    return response;
  } catch (error) {
    console.error("Error al realizar la solicitud de registro:", error);
    if (error.response) {
      console.error("Respuesta del servidor:", error.response.data);
    }
    throw error;
  }
};

export const verifyTokenRequest = async () => {
  const res = await axios.get("verify");
  console.log("xd", res);
  return res;
};

export const addChild = async (emails) => {
  try {
    const response = await axios.post("tutor/register/child", emails);
    return response;
  } catch (e) {
    console.log(e);
    return false;
  }
};
