import { useSubject } from "../context/SubjectContext";
import { Sidebar } from "../components/sidebar/Sidebar";

export const ChildProfile = () => {
  const { subject } = useSubject();
  console.log(subject);
  return <p>Child profile</p>;
};
