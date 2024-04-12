import { Sidebar } from "../components/sidebar/Sidebar";
import { RegisterChildForm } from "../components/forms/RegisterChildForm";

export const RegisterChild = () => {
  return (
    <div className="bg-gradient-to-br from-skyBlue-400 to-skyBlue-600 min-h-screen">
      <Sidebar />
      <div className="px-5">
        <RegisterChildForm />
      </div>
    </div>
  );
};
