import { Sidebar } from "../components/sidebar/Sidebar";
import { TutorRegisterForm } from "../components/forms/TutorRegisterForm";

export const RegisterTutor = () => {
  return (
    <div className="bg-gradient-to-br from-skyBlue-400 to-skyBlue-600 min-h-screen">
      <Sidebar />
      <div className="px-5">
        <TutorRegisterForm />
      </div>
    </div>
  );
};
