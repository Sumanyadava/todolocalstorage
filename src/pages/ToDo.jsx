import React, { useEffect, useState } from "react";



const getLocalItems = () => {
  const liststring = localStorage.getItem('localTaskList')
  const list = JSON.parse(liststring)
  if (list) {
    return JSON.parse(localStorage.getItem('localTaskList'))
  }else{
    return []
  }
}

const ToDo = () => {
  const [inputState, setInputState] = useState("");
  const [taskAraay, setTaskArray] = useState(getLocalItems());
  const [completedTasks, setCompletedTasks] = useState(() => {
    const savedCompletedTasks = JSON.parse(localStorage.getItem('completedTasks'))
    return savedCompletedTasks || []
  });

  

  const handleAdd = (e) => {
    if (inputState.trim() !== "") {
      setTaskArray([...taskAraay, inputState.trim()]);
      setInputState("");
    } else {
      setInputState("");
    }
  };

  const handleCheck = (index) => {
    let updatedCompletedTask = [...completedTasks];
    updatedCompletedTask[index] = !updatedCompletedTask[index];
    setCompletedTasks(updatedCompletedTask);

    localStorage.setItem('completedTasks',JSON.stringify(updatedCompletedTask))

    
  };

  const handleEdit = (index) => {
    
    if (inputState !== "") {
      alert("there are unsaved changes in input clear it ");
    } else {
      setInputState(taskAraay[index]);
      handleDelete(index);
    }
  };

  const handleDelete = (index) => {

    let reducetask = [...taskAraay];
    reducetask.splice(index, 1);

    setTaskArray(reducetask);

    // the checkbox is still check if check task is deleted 

    const newCompletedTasks = [...completedTasks];
    newCompletedTasks.splice(index, 1);
    setCompletedTasks(newCompletedTasks);
    localStorage.setItem('completedTasks',JSON.stringify(newCompletedTasks))
  };

  useEffect(() => {
    localStorage.setItem("localTaskList",JSON.stringify(taskAraay))
  },[taskAraay])


  return (
    <div className=" h-[60vh] w-screen">
      <div className="todo_heading h-[10vh] w-full  flex justify-center items-center gap-5">
        <input
          className="h-full w-[70%] pl-10 outline-none rounded-3xl"
          type="text"
          value={inputState}
          onChange={(e) => setInputState(e.target.value)}
          name=""
          id=""
          placeholder="Write your task here"
        />

      
        <button className="btn btn-primary" onClick={handleAdd}>
          Add
        </button>
      </div>
      {taskAraay.map((task, index) => {
        return (
          <div
            key={index}
            className={`ourTask flex flex-col justify-around items-center gap-2 mt-5 `}
          >
            <div className="task h-20 w-[75%]">
              <div className="form-control bg-yellow-100 h-full w-full flex flex-row justify-around items-center">
                <input
                  type="checkbox"
                  className="checkbox"
                  checked={completedTasks[index]}
                  onClick={() => handleCheck(index)}
                />
                <div
                  className={`label-text w-40 text-2xl ${
                    completedTasks[index] ? "line-through" : ""
                  }`}
                >
                  <b>{index +1 }</b> . {task}
                </div>
                <div className="label-text w-[10%] flex ">
                  <div
                    className="btn btn-ghost "
                    onClick={() => handleEdit(index)}
                  >
                    edit
                  </div>
                  <div
                    className="btn btn-ghost"
                    onClick={() => handleDelete(index)}
                  >
                    delete
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ToDo;
