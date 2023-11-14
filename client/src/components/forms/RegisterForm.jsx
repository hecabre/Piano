import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import {
  AiOutlineUserAdd,
  AiFillEye,
  AiFillEyeInvisible,
} from "react-icons/ai";
import { RiLockPasswordFill } from "react-icons/ri";
import { useState } from "react";

export const RegisterForm = () => {
  const [seePassword, setSeePassword] = useState(false);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });
  console.log(errors);
  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col gap-2 relative top-24 w-1/2 mx-auto items-center justify-center rounded-lg py-2 px-3  shadow-2xl backdrop-blur-lg"
    >
      <h2 className="font-nunito font-bold  text-2xl">Crear cuenta</h2>
      <p className="hidden">
        {errors.email?.type === "required" && (
          <>{toast.error(errors.email.message)}</>
        )}
        {errors.password?.type === "required" ? (
          <>{toast.error(errors.password.message)}</>
        ) : (
          errors.confirmPassword?.type === "required" && (
            <>{toast.error(errors.confirmPassword.message)}</>
          )
        )}
      </p>
      <label htmlFor="email" className="">
        Email
      </label>
      <div className="flex px-2 py-1 items-center border border-black-400 rounded-lg gap-1">
        <AiOutlineUserAdd className="text-lg" />
        <input
          type="email"
          name="email"
          className="focus:outline-none"
          {...register("email", {
            required: {
              value: true,
              message: "Correo es requerido",
            },
            pattern: {
              value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
              message: "Correo no válido",
            },
          })}
        />
      </div>
      <label htmlFor="password">Contraseña</label>
      <section className="border border-black-400 flex items-center gap-1 px-2 py-1 rounded-lg justify-between">
        <div className="flex items-center gap-1">
          <RiLockPasswordFill />
          <input
            className="focus:outline-none"
            name="password"
            type={seePassword ? "text" : "password"}
            {...register("password", {
              required: {
                value: true,
                message: "Contraseña es requerida",
              },
            })}
          />
        </div>
        <div>
          {seePassword ? (
            <AiFillEyeInvisible
              className="cursor-pointer"
              onClick={() => setSeePassword(!seePassword)}
            />
          ) : (
            <AiFillEye
              className="cursor-pointer"
              onClick={() => setSeePassword(!seePassword)}
            />
          )}
        </div>
      </section>
      <label htmlFor="confirmPassword">Confirmar contraseña</label>
      <div className="border border-black-400 flex items-center gap-1 px-2 py-1 rounded-lg justify-between">
        <div className="flex items-center gap-1">
          <RiLockPasswordFill />
          <input
            className="focus:outline-none"
            name="confirmPassword"
            type={seePassword ? "text" : "password"}
            {...register("confirmPassword", {
              required: {
                value: true,
                message: "Contraseña es requerida",
              },
            })}
          />
        </div>
        <div>
          {seePassword ? (
            <AiFillEyeInvisible
              className="cursor-pointer"
              onClick={() => setSeePassword(!seePassword)}
            />
          ) : (
            <AiFillEye
              className="cursor-pointer"
              onClick={() => setSeePassword(!seePassword)}
            />
          )}
        </div>
      </div>
      <button className="w-1/3 h-1/4 py-2 rounded-ful bg-gradient-to-r from-black-500 to-black-600 rounded-full text-black-0 font-nunito font-light">
        Crear cuenta
      </button>
    </form>
  );
};
