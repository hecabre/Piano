import { Key } from "../components/Key";
import { Sidebar } from "../components/sidebar/Sidebar";

export const Home = () => {
  return (
    <>
      <Sidebar />
      <section className="w-full mx-auto h-auto flex items-start justify-center top-32 relative">
        <Key bemol={false} note={"q"} note_path={"../assets/audio/Do.wav"} />
        <Key bemol={true} note_path={"../assets/audio/Rebemol.wav"} />
        <Key bemol={false} note={"w"} note_path={"../assets/audio/Re.wav"} />
        <Key bemol={true} note_path={"../assets/audio/Mibemol.wav"} />
        <Key bemol={false} note={"e"} note_path={"../assets/audio/Mi.wav"} />
        <Key bemol={false} note={"r"} note_path={"../assets/audio/Fa.wav"} />
        <Key
          bemol={true}
          note={"t"}
          note_path={"../assets/audio/Solbemol.wav"}
        />
        <Key bemol={false} note_path={"../assets/audio/Sol.wav"} note={"y"} />
        <Key
          bemol={true}
          note_path={"../assets/audio/Labemol.wav"}
          note={"u"}
        />
        <Key bemol={false} note_path={"../assets/audio/La.wav"} note={"i"} />
        <Key
          bemol={true}
          note_path={"../assets/audio/Sibemol.wav"}
          note={"o"}
        />
        <Key bemol={false} note_path={"../assets/audio/Si.wav"} note={"p"} />
      </section>
    </>
  );
};
