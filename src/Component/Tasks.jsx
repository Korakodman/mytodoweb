import React, { useRef, useState } from "react";
import { use } from "react";

function Tasks({ tasks, deleteTask, i }) {
  const [currentForm, setCurrentForm] = useState(null);

  const dialog = useRef(null);
  const closeDialog = () => {
    dialog.current.close();
  };
  const formSubmit = (e) => {
    e.preventDefault();
    if (currentForm) {
      deleteTask(i);
    } else {
      console.log("Edit the task");
    }
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
                  className=" mx-2 p-2 bg-red-300 text-lg hover:bg-red-500 rounded-md"
                  onClick={() => dialog.current.showModal(setCurrentForm(true))}
                >
                  Delete
                </button>
                <button
                  className=" bg-slate-300 p-2 text-lg w-[60px] hover:bg-slate-500 rounded-md"
                  onClick={() =>
                    dialog.current.showModal(setCurrentForm(false))
                  }
                >
                  Edit
                </button>
              </div>
            </div>
            <dialog
              ref={dialog}
              className="w-[400px] h-fit rounded-md p-4 bg-white border-black"
            >
              <form action="" onSubmit={formSubmit} className="">
                {currentForm
                  ? "Are you sure you want to delete this task?"
                  : "Edit the task"}
                {currentForm ? (
                  ""
                ) : (
                  <input
                    type="text"
                    className="w-[350px] px-2 py-1 mt-2 border-2 border-black rounded-md flex"
                  />
                )}
                <div className="flex justify-end p-2 mt-8">
                  <button
                    type="submit"
                    className={
                      currentForm
                        ? "bg-red-500 px-3 py-2 mx-2 rounded-md border-red-800 border-2 font-bold text-white"
                        : "bg-blue-500 px-3 py-2 mx-2 rounded-md border-blue-800 border-2 font-bold text-white"
                    }
                  >
                    {currentForm ? "Delete" : "Edit"}
                  </button>
                  <button
                    className="bg-gray-500 p-2 rounded-md border-2 border-gray-800 text-white font-bold justify-end "
                    onClick={() => closeDialog()}
                  >
                    Close
                  </button>
                </div>
              </form>
            </dialog>
          </div>
        );
      })}
    </div>
  );
}

export default Tasks;
