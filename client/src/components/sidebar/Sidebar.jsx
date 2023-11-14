import { useState } from "react";
import { AiOutlineClose, AiOutlineBars } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <nav className="fixed top-0 w-full shadow-lg flex justify-between lg:justify-around md:justify-around items-center z-20 text-white py-5 px-3 font-nunito">
      <div className="cursor-pointer" onClick={() => navigate("/")}>
        logo
      </div>
      <ul className="flex justify-around gap-0 md:gap-20">
        <li className="hidden md:block lg:block text-lg text-white font-semi text-black-700">
          Materias
        </li>
        <li className="hidden md:block lg:block text-lg text-white font-semi text-black-700">
          Problemas
        </li>
        <li className="hidden md:block lg:block text-lg text-white font-semi text-black-700">
          Respuestas
        </li>
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
          className="text-md bg-gradient-to-r from-black-600 to-black-800 text-black-0 px-7 py-2 rounded-full opacity-80 cursor-pointer hidden md:block lg:block font-nunito"
          onClick={() => navigate("/register")}
        >
          Registrar
        </p>
      </div>

      <div
        className={`fixed top-0 right-0 h-full shadow-lg backdrop-blur-lg  w-64 p-4 transition-transform duration-300  ease-in-out transform ${
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

        <ul className="text-white">
          <li className="py-2 font-nunito">Materias</li>
          <li className="py-2 font-nunito">Ejercicios</li>
          <li className="py-2 font-nunito">Respuestas</li>
          <li
            className="py-2 font-nunito"
            onClick={() => navigate("/register")}
          >
            Registrar
          </li>
        </ul>
      </div>
    </nav>
  );
};
