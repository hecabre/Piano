import { Sidebar } from "../components/sidebar/Sidebar";
import { TutorLoginForm } from "../components/forms/TutorLoginForm";

export const LoginTutor = () => {
  return (
    <div className="bg-gradient-to-br from-skyBlue-400 to-skyBlue-600 min-h-screen">
      <Sidebar />
      <div className="px-5">
        <TutorLoginForm />
      </div>
    </div>
  );
};
