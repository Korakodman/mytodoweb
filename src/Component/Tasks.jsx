import React, { useRef, useState } from "react";

function Tasks({ tasks, DeleteTask, EditTask }) {
  const [currentForm, setCurrentForm] = useState(null);
  const [taskId, setTaskId] = useState(null);
  const [editTask, setEditTask] = useState("");
  const dialog = useRef(null);

  const openDialog = (isDelete, index, task) => {
    setEditTask(task.task);
    setCurrentForm(isDelete);
    setTaskId(index);
    dialog.current.showModal();
  };
  const handleinput = (e) => {
    setEditTask(e.target.value);
  };
  const closeDialog = () => {
    setEditTask("");
    dialog.current.close();
  };

  const formSubmit = (e) => {
    e.preventDefault();
    if (currentForm) {
      DeleteTask(taskId); // ลบ task
      closeDialog();
    } else {
      EditTask(editTask, taskId);
      setEditTask("");
      closeDialog();
    }
  };

  return (
    <div>
      {tasks.map((task, index) => (
        <div
          className=" bg-stone-300 p-2 m-2 w-[500px] rounded-md "
          key={index}
        >
          <div className="flex p-2 justify-between text-center">
            <div className="p-1 text-lg font-bold">{task.task}</div>
            <div className="flex">
              <button
                className="mx-2 p-2 bg-red-300 text-lg hover:bg-red-500 rounded-md"
                onClick={() => openDialog(true, index, task)}
              >
                Delete
              </button>
              <button
                className="bg-slate-300 p-2 text-lg w-[60px] hover:bg-slate-500 rounded-md"
                onClick={() => openDialog(false, index, task)}
              >
                Edit
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Dialog Component */}
      <dialog
        ref={dialog}
        className="w-[400px] h-fit rounded-md p-4 bg-white border-black"
      >
        <form action="" onSubmit={formSubmit} className="">
          {currentForm
            ? "Are you sure you want to delete this task?"
            : "Edit the task"}
          {!currentForm && (
            <input
              type="text"
              className="w-[350px] px-2 py-1 mt-2 border-2 border-black rounded-md flex"
              value={editTask}
              onChange={(e) => handleinput(e)}
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
              onClick={closeDialog}
              type="button"
            >
              Close
            </button>
          </div>
        </form>
      </dialog>
    </div>
  );
}

export default Tasks;
