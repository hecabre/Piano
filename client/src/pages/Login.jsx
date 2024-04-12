import { Sidebar } from "../components/sidebar/Sidebar";
import { LoginForm } from "../components/forms/LoginForm";

export const Login = () => {
  return (
    <div className="bg-gradient-to-br from-skyBlue-400 to-skyBlue-600 min-h-screen">
      <Sidebar />
      <div className="px-5">
        <LoginForm />
      </div>
    </div>
  );
};
