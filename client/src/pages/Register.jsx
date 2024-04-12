import { RegisterForm } from "../components/forms/RegisterForm";
import { Sidebar } from "../components/sidebar/Sidebar";

export const Register = () => {
  return (
    <div className="bg-gradient-to-br from-skyBlue-400 to-skyBlue-600 min-h-screen">
      <Sidebar />
      <div className="px-5">
        <RegisterForm />
      </div>
    </div>
  );
};
