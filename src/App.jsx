import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Tasks from "./Component/Tasks";

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const addtask = () => {
    if (input) {
      setTasks([...tasks, { task: input }]);
      setInput("");
      setError(false);
    } else {
      setError(true);
    }
  };
  const DeleteTask = (id) => {
    setTasks((prev) => prev.filter((task, index) => index !== id));
  };
  const EditTask = (item, index) => {
    if (!item) {
      return;
    }
    const Newtask = item;
    setTasks((prev) =>
      prev.map((task, i) => {
        if (i === index) {
          return { task: Newtask };
        }
        return task;
      })
    );
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
            className="bg-blue-300 hover:bg-blue-500  border-2 border-gray-500 px-4 py-1 rounded-md mx-2 font-bold text-base"
            onClick={addtask}
          >
            Add
          </button>
        </section>
        <div className="text-red-500 text-center my-1">
          {error ? "ใส่ข้อมูลด้วย" : ""}
        </div>
        <section className="grid justify-center">
          <Tasks tasks={tasks} DeleteTask={DeleteTask} EditTask={EditTask} />
        </section>
        {tasks.length === 0 && (
          <div className="flex justify-center mt-4 text-red-400 font-bold text-2xl">
            ไม่มีข้อมูลในขณะนี้
          </div>
        )}
      </main>
    </>
  );
}

export default App;
