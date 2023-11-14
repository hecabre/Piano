import { Key } from "./components/Key";
import { Sidebar } from "./components/sidebar/Sidebar";

function App() {
  return (
    <div>
      <Sidebar />
      <section className="w-full mx-auto h-auto flex items-start justify-center  top-32 relative">
        <Key bemol={false} />
        <Key bemol={true} />
        <Key bemol={false} />
        <Key bemol={true} />
        <Key bemol={false} />
        <Key bemol={true} />
        <Key bemol={false} />
      </section>
    </div>
  );
}

export default App;
