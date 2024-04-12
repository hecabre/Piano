import { Key } from "../components/Key";
import { Sidebar } from "../components/sidebar/Sidebar";

export const Home = () => {
  return (
    <main className="bg-gradient-to-br from-skyBlue-400  to-skyBlue-600  min-h-screen">
      <Sidebar />
      <section className="w-full mx-auto h-auto flex items-start justify-center top-32 relative">
        <Key bemol={false} note={"q"} note_path={"../assets/audio/Do.wav"} />
        <Key
          bemol={true}
          note={"w"}
          note_path={"../assets/audio/Rebemol.wav"}
        />
        <Key bemol={false} note={"e"} note_path={"../assets/audio/Re.wav"} />
        <Key
          bemol={true}
          note={"r"}
          note_path={"../assets/audio/Mibemol.wav"}
        />
        <Key bemol={false} note={"t"} note_path={"../assets/audio/Mi.wav"} />
        <Key
          bemol={true}
          note={"y"}
          note_path={"../assets/audio/Solbemol.wav"}
        />
        <Key bemol={false} note={"u"} note_path={"../assets/audio/Fa.wav"} />
      </section>
    </main>
  );
};
