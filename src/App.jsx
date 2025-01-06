import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Tasks from "./Component/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, task: "Task 1" },
    { id: 2, task: "Task 2" },
    { id: 3, task: "Task 3" },
  ]);
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const addtask = () => {
    if (input) {
      setTasks([...tasks, { id: tasks.length + 1, task: input }]);
      setInput("");
      setError(false);
    } else {
      setError(true);
    }
  };
  return (
    <>
      <nav className="bg-blue-500 p-4 flex ">
        <header className=" text-xl border-black border-2 p-2 bg-white rounded-md">
          To do List app
        </header>
      </nav>
      <main className="p-4 mt-2 mx-2 bg-blue-100  rounded-md">
        <section className="flex justify-center">
          <input
            type="text"
            placeholder="Add a new task"
            className="border-2 p-2 w-[400px] focus:outline-none rounded-md"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            className="bg-blue-300 hover:bg-blue-500   px-4 py-1 rounded-md mx-2 font-bold text-base"
            onClick={addtask}
          >
            Add
          </button>
        </section>
        <div className="text-red-500 text-center my-1">
          {error ? "ใส่ข้อมูลด้วย" : ""}
        </div>
        <section className="grid justify-center">
          <Tasks tasks={tasks} />
        </section>
      </main>
    </>
  );
}

export default App;
