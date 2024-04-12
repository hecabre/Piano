import { useState } from "react";
import { AiOutlineClose, AiOutlineBars } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <nav className="fixed top-0 w-full shadow-lg flex justify-between lg:justify-around md:justify-around items-center z-10 text-white py-5 px-3 font-nunito text-black-0 bg-gradient-to-br from-skyBlue-400  to-skyBlue-600">
      <img
        className="cursor-pointer w-12 h-12"
        onClick={() => navigate("/")}
        src="../../public/img/logo.png"
      />
      <ul className="flex justify-around gap-0 md:gap-20">
        <Link
          className="hidden md:block lg:block text-lg text-white font-semi text-black-0"
          to={"/game"}
        >
          Materias
        </Link>
        <Link
          className="hidden md:block lg:block text-lg text-white font-semi text-black-0"
          to={"/subject/1"}
        >
          Problemas
        </Link>
        <Link
          className="hidden md:block lg:block text-lg text-white font-semi text-black-0"
          to={"/login/tutor"}
        >
          Padres
        </Link>
        <Link
          className="hidden md:block lg:block text-lg text-white font-semi text-black-0"
          to={"/register/child"}
        >
          Vincular Hijo
        </Link>
      </ul>

      <div className="flex items-center justify-center gap-5" id="sidebar">
        {sidebarOpen ? (
          <AiOutlineClose
            className="block md:hidden lg:hidden text-2xl cursor-pointer"
            onClick={toggleSidebar}
          />
        ) : (
          <AiOutlineBars
            className="block md:hidden lg:hidden text-2xl cursor-pointer"
            onClick={toggleSidebar}
          />
        )}

        <p
          className="text-md bg-skyBlue-700 text-black-0 px-7 py-2 rounded-full cursor-pointer hidden md:block lg:block font-nunito"
          onClick={() => navigate("/login")}
        >
          Iniciar Sesion
        </p>
      </div>
      <div
        className={`fixed top-0 right-0 h-full shadow-lg backdrop-blur-lg bg-gradient-to-br from-skyBlue-400 to-skyBlue-700 w-64 p-4 transition-transform duration-300 ease-in-out transform ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {sidebarOpen && (
          <div
            className="absolute top-4 right-4 text-white cursor-pointer"
            onClick={toggleSidebar}
          >
            <AiOutlineClose className="text-2xl" />
          </div>
        )}

        <ul className="text-white flex flex-col">
          <Link className="py-2 font-nunito" to={"/game"}>
            Materias
          </Link>
          <Link className="py-2 font-nunito" to={"/subject/1"}>
            Ejercicios
          </Link>
          <Link className="py-2 font-nunito" to={"/register/tutor"}>
            Padres
          </Link>
          <li
            className="py-2 font-nunito"
            onClick={() => navigate("/register")}
          >
            Iniciar Sesion
          </li>
        </ul>
      </div>
    </nav>
  );
};
