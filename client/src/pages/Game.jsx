import { useEffect, useState } from "react";
import { useSubject } from "../context/SubjectContext";
import { Sidebar } from "../components/sidebar/Sidebar";
import { SubjectBar } from "../components/subjects/SubjectBar";
import { Key } from "../components/Key";

export const Game = () => {
  const { listSubjects, subjects: allSubjects } = useSubject();
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await listSubjects();
        console.log("respuesta", res);
        setData(res.data.subjects[0]);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="bg-gradient-to-br from-skyBlue-400 to-skyBlue-600 min-h-screen">
      <Sidebar />
      <div className="px-5">
        <div className="min-h-screen relative top-32">
          <div className="flex items-center justify-center gap-2 w-scren flex-wrap mb-10">
            {data.map((subject) => (
              <SubjectBar
                key={subject.subject_id}
                subjectId={subject.subject_id}
                subjectName={subject.subject_name}
              />
            ))}
          </div>
          <div className="w-full mx-auto h-auto flex items-start justify-center flex-wrap">
            <Key
              bemol={false}
              note={"q"}
              note_path={"../assets/audio/Do.wav"}
            />
            <Key
              bemol={true}
              note={"w"}
              redirect_path={"/subject/1"}
              note_path={"../assets/audio/Rebemol.wav"}
            />
            <Key
              bemol={false}
              note={"e"}
              note_path={"../assets/audio/Re.wav"}
            />
            <Key
              bemol={true}
              note={"r"}
              redirect_path={"/subject/2"}
              note_path={"../assets/audio/Mibemol.wav"}
            />
            <Key
              bemol={false}
              note={"t"}
              note_path={"../assets/audio/Mi.wav"}
            />
            <Key
              bemol={true}
              note={"y"}
              redirect_path={"/subject/3"}
              note_path={"../assets/audio/Solbemol.wav"}
            />
            <Key
              bemol={false}
              note={"u"}
              note_path={"../assets/audio/Fa.wav"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
