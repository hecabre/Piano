import { useForm } from "react-hook-form";
import { IoMdHappy } from "react-icons/io";
import {
  AiOutlineUserAdd,
  AiFillEye,
  AiFillEyeInvisible,
} from "react-icons/ai";
import { RiLockPasswordFill } from "react-icons/ri";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaQuestionCircle } from "react-icons/fa";
import { useAuth } from "../../context/AuthContext";

export const TutorLoginForm = () => {
  const [seePassword, setSeePassword] = useState(false);
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const { signinTutor, userData } = useAuth();
  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
    const error = signinTutor(data);
    navigate("/register/child");
    console.log(userData);
  });

  return (
    <div className="min-h-screen mt-16 flex items-center justify-center ">
      <form
        onSubmit={onSubmit}
        className="max-w-md w-full p-6 bg-white rounded-lg shadow-2xl"
      >
        <div className="flex items-center justify-center">
          <IoMdHappy className="text-center text-4xl md:text-5xl lg:text-6xl text-skyBlue-500" />
        </div>
        <h2 className="text-3xl font-semibold mb-2 text-center text-gray-600">
          Iniciar sesion como tutor
        </h2>

        <div className="mb-3">
          <p className="text-red-500 text-center">{userData?.error}</p>
          {errors.email?.type === "required" && (
            <p className="text-red-500 text-center">{errors.email.message}</p>
          )}
          {errors.password?.type === "required" && (
            <p className="text-red-500 text-center">
              {errors.password.message}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <div className="flex items-center border border-gray-300 rounded-lg p-2">
            <AiOutlineUserAdd className="text-lg text-gray-600" />
            <input
              type="email"
              name="email"
              placeholder="Correo electrónico"
              className="focus:outline-none flex-1 ml-2"
              {...register("email", {
                required: "Correo es requerido",
                pattern: {
                  value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                  message: "Correo no válido",
                },
              })}
            />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="sr-only">
            Contraseña
          </label>
          <div className="flex items-center border border-gray-300 rounded-lg p-2">
            <RiLockPasswordFill className="text-gray-600" />
            <input
              className="focus:outline-none flex-1 ml-2"
              name="password"
              type={seePassword ? "text" : "password"}
              placeholder="Contraseña"
              {...register("password", {
                required: "Contraseña es requerida",
              })}
            />
            <div>
              {seePassword ? (
                <AiFillEyeInvisible
                  className="cursor-pointer text-gray-600"
                  onClick={() => setSeePassword(!seePassword)}
                />
              ) : (
                <AiFillEye
                  className="cursor-pointer text-gray-600"
                  onClick={() => setSeePassword(!seePassword)}
                />
              )}
            </div>
          </div>
        </div>
        <Link to={"/register/tutor"}>
          <div className="mb-4 text-sm text-center flex items-center justify-center gap-2">
            <FaQuestionCircle className="text-skyBlue-500 font-bold cursor-pointer text-lg" />
            <p className="text-gray-600">
              Si no tienes una cuenta como tutor{" "}
              <span className="text-skyBlue-500 font-bold cursor-pointer">
                registrate aqui!
              </span>
            </p>
          </div>
        </Link>
        <button className="w-full py-2 rounded-full bg-gradient-to-r from-skyBlue-400 to-skyBlue-600 text-white">
          Iniciar sesion
        </button>
      </form>
    </div>
  );
};
