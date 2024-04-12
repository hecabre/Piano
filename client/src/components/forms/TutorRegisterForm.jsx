import { useForm } from "react-hook-form";
import {
  AiOutlineUserAdd,
  AiFillEye,
  AiFillEyeInvisible,
} from "react-icons/ai";
import { RiLockPasswordFill } from "react-icons/ri";
import { useState } from "react";
import { IoCalendarNumber } from "react-icons/io5";
import { IoMdHappy } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext.jsx";
import { useEffect } from "react";
import { FaPersonBreastfeeding } from "react-icons/fa6";
import { Link } from "react-router-dom";

export const TutorRegisterForm = () => {
  const navigate = useNavigate();
  const [seePassword, setSeePassword] = useState(false);
  const { signupTutor, userData } = useAuth();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit(async (values) => {
    await signupTutor(values);
    console.log(" este es", userData);
  });

  useEffect(() => {
    if (userData && userData.message) {
      navigate("/login/tutor");
    }
  }, [userData, navigate]);

  return (
    <div className="min-h-screen mt-16 flex items-center justify-center ">
      <form
        onSubmit={onSubmit}
        className="max-w-md w-full p-6 bg-white rounded-lg shadow-2xl"
      >
        <div className="items-center flex justify-center">
          <IoMdHappy className="text-center text-4xl md:text-5xl lg:text-6xl text-skyBlue-500" />
        </div>
        <h2 className="text-3xl font-semibold text-center text-gray-600 mb-1">
          Crear cuenta como tutor
        </h2>
        <div className="mb-4">
          <p className="text-center text-red-500">{userData?.error}</p>
          {errors.email?.type === "required" && (
            <p className="text-red-500 text-center">{errors.email.message}</p>
          )}
          {(errors.password?.type === "required" ||
            errors.confirmPassword?.type === "required") && (
            <p className="text-red-500 text-center">
              {errors.password?.message || errors.confirmPassword?.message}
            </p>
          )}
          {errors.apellido?.type === "required" && (
            <p className="text-red-500 text-center">
              {errors.apellido.message}
            </p>
          )}
          {errors.edad?.type === "required" && (
            <p className="text-red-500 text-center">{errors.edad.message}</p>
          )}{" "}
          {errors.nombre?.type === "required" && (
            <p className="text-red-500 text-center">{errors.nombre.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <div className="flex items-center border border-gray-300 rounded-lg p-2">
            <MdOutlineEmail className="text-lg text-gray-600" />
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
          <label htmlFor="username" className="sr-only">
            Nombre
          </label>
          <div className="flex items-center border border-gray-300 rounded-lg p-2">
            <AiOutlineUserAdd className="text-lg text-gray-600" />
            <input
              type="text"
              name="username"
              placeholder="Nombre"
              className="focus:outline-none flex-1 ml-2"
              {...register("username", {
                required: "Nombre es requerido",
              })}
            />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="second_name" className="sr-only">
            Apellido
          </label>
          <div className="flex items-center border border-gray-300 rounded-lg p-2">
            <AiOutlineUserAdd className="text-lg text-gray-600" />
            <input
              type="text"
              name="second_name"
              placeholder="Apellido"
              className="focus:outline-none flex-1 ml-2"
              {...register("second_name", {
                required: "Apellido es requerido",
              })}
            />
          </div>
        </div>
        <div className="mb-6">
          <label htmlFor="age" className="sr-only">
            Edad
          </label>
          <div className="flex items-center border border-gray-300 rounded-lg p-2">
            <IoCalendarNumber className="text-lg text-gray-600" />
            <input
              type="number"
              name="age"
              placeholder="Edad"
              className="focus:outline-none flex-1 ml-2 appearance-none"
              {...register("age", {
                required: "Edad es requerida",
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
        <div className="mb-4 text-sm text-center gap-2 flex items-center justify-center">
          <Link
            to={"/login/tutor"}
            className="flex items-center justify-center gap-2"
          >
            <FaPersonBreastfeeding className="text-skyBlue-500 font-bold cursor-pointer text-lg" />
            <p className="text-gray-600">
              Si ya tienes cuenta de{" "}
              <span className="text-skyBlue-500 font-bold cursor-pointer">
                {" "}
                tutor inicia sesion
              </span>{" "}
              aqui!
            </p>
          </Link>
        </div>
        <button className="w-full py-2 rounded-full bg-gradient-to-r from-skyBlue-400 to-skyBlue-600 text-white">
          Crear cuenta
        </button>
      </form>
    </div>
  );
};
