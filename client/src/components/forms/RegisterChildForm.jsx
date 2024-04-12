import { useForm } from "react-hook-form";
import { IoMdHappy } from "react-icons/io";
import { AiOutlineUserAdd } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export const RegisterChildForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const { userData, registerChild } = useAuth();
  const navigate = useNavigate();
  const onSubmit = handleSubmit(async (data) => {
    try {
      const response = await registerChild(data);
      console.log("despues del register", response);
      if (response.data.message === 1) return navigate("/profile/child");
    } catch (error) {
      console.log("error");
      console.error("Error al registrar al hijo:", error);
    }
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
          Vincula tu cuenta a tu hijo
        </h2>
        <div className="mb-3">
          {userData?.error && (
            <p className="text-red-500 text-center">{userData?.error}</p>
          )}

          <p className="text-red-500 text-center">{}</p>
          {errors.emailChild?.type === "required" && (
            <p className="text-red-500 text-center">
              {errors.emailChild.message}
            </p>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="sr-only">
            Email de tu hijo
          </label>
          <div className="flex items-center border border-gray-300 rounded-lg p-2">
            <AiOutlineUserAdd className="text-lg text-gray-600" />
            <input
              type="email"
              name="email"
              value={userData.email}
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
          <label htmlFor="emailChild" className="sr-only">
            Email de tu hijo
          </label>
          <div className="flex items-center border border-gray-300 rounded-lg p-2">
            <AiOutlineUserAdd className="text-lg text-gray-600" />
            <input
              type="email"
              name="emailChild"
              placeholder="Correo electrónico de tu hijo"
              className="focus:outline-none flex-1 ml-2"
              {...register("emailChild", {
                required: "Correo es requerido",
                pattern: {
                  value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                  message: "Correo no válido",
                },
              })}
            />
          </div>
          <p className="text-light text-xs text-center text-gray-500 ">
            Tu hijo debe de estar registrado en la aplicacion
          </p>
        </div>{" "}
        <button
          type="submit"
          className="w-full py-2 rounded-full bg-gradient-to-r from-skyBlue-400 to-skyBlue-600 text-white"
        >
          Vincular
        </button>
      </form>
    </div>
  );
};
