import React, { useRef, useState } from "react";
import { use } from "react";

function Tasks({ tasks }) {
  const [edite, setEditetask] = useState(false);
  const [Delete, setDeleteTask] = useState(false);
  const [currentForm, setCurrentForm] = useState(null);

  const dialog = useRef(null);
  const deleteTask = (id) => {
    id = tasks.filter((task) => task.id !== id);
  };
  return (
    <div>
      {tasks.map((task) => {
        return (
          <div
            className=" bg-stone-300 p-2 m-2 w-[500px] rounded-md "
            key={task.id}
          >
            <div className="flex  p-2 justify-between text-center">
              <div className=" p-1 text-lg font-bold">{task.task}</div>
              <div className="flex">
                <button
                  className=" mx-2 p-2 bg-red-300 text-lg hover:bg-red-500 rounded-sm"
                  onClick={() =>
                    dialog.current.showModal(setCurrentForm("delete"))
                  }
                >
                  Delete
                </button>
                <button
                  className=" bg-slate-300 p-1 text-lg hover:bg-slate-500 rounded-sm"
                  onClick={() =>
                    dialog.current.showModal(setCurrentForm("edit"))
                  }
                >
                  Edite
                </button>
              </div>
            </div>
            <dialog ref={dialog}>
              {currentForm === "delete" && (
                <div>
                  <p>Are you sure?</p>
                  <button
                    className="bg-red-300 p-2 mx-2 hover:bg-red-500 rounded-sm"
                    onClick={() => {
                      // Handle delete logic here
                      deleteTask(task.id);
                      dialog.current.close(task.id);
                      setCurrentForm(null);
                    }}
                  >
                    Delete
                  </button>
                  <button
                    className="bg-slate-300 p-2 mx-2 hover:bg-slate-500 rounded-sm"
                    onClick={() => {
                      dialog.current.close();
                      setCurrentForm(null);
                    }}
                  >
                    Close
                  </button>
                </div>
              )}
              {currentForm === "edit" && (
                <div>
                  <p>Edit Task</p>
                  {/* Add your edit form here */}
                  <button
                    className="bg-slate-300 p-2 mx-2 hover:bg-slate-500 rounded-sm"
                    onClick={() => {
                      dialog.current.close();
                      setCurrentForm(null);
                    }}
                  >
                    Close
                  </button>
                </div>
              )}
            </dialog>
          </div>
        );
      })}
    </div>
  );
}

export default Tasks;
