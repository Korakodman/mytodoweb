import React from "react";

function Tasks({ tasks }) {
  return (
    <div>
      {tasks.map((task) => {
        return (
          <div
            className=" bg-stone-300 p-2 m-2 w-[400px] rounded-md "
            key={task.id}
          >
            <div className="flex  p-2 justify-between text-center">
              <div className=" p-1">{task.task}</div>
              <div className="flex">
                <button className=" mx-2 p-1 bg-red-200">Delete</button>
                <button className=" bg-slate-200 p-1">Edite</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Tasks;
