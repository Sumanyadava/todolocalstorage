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
    <div className=" h-[60vh] w-screen ">
      <h1 className="text-sm absolute top-5 left-8 w-[80%] "><b className="text-2xl">Your Todo's Are safe </b>as it store your task in you machine so no other computer has access ot it</h1>
      <div className="todo_heading h-[10vh] w-full  flex justify-center items-center gap-5 ">
        <input
          className="h-full w-[70%] pl-10 outline-none rounded-3xl font-semibold text-2xl"
          type="text"
          value={inputState}
          onChange={(e) => setInputState(e.target.value)}
          name=""
          id=""
          placeholder="Write your task here"
        />

      
        <button className="btn btn-accent h-[90%] text-2xl font-black " onClick={handleAdd}>
          Add
        </button>
      </div>
      <div className="task_div pb-20">
      {taskAraay.map((task, index) => {
        return (
          <div
            key={index}
            className={`ourTask flex flex-col justify-around items-center gap-2 mt-5 `}
          >
            <div className="task h-20 w-[90%] sm:w-[75%] ">
              <div className="form-control bg-yellow-200 h-full w-full flex flex-row items-center rounded-xl sm:justify-around pl-3 ">
                <div className="todo_task flex  w-[50%] h-full items-center justify-start overflow-y-auto gap-5 no-scrollbar " onClick={() => handleCheck(index)} >
                <input
                  type="checkbox"
                  className="checkbox"
                  checked={completedTasks[index]}
                  
                />
                <div
                  className={`label-text w-40 text-2xl text-black font-bold ${
                    completedTasks[index] ? "line-through" : ""
                  }`}
                >
                   {task}
                </div>
                </div>

                <div className="label-text w-[10%] flex flex-row gap-5 ">
                  <div
                    className="btn bg-white  text-lg text-black hover:text-white "
                    onClick={() => handleEdit(index)}
                  >
                    edit
                  </div>
                  <div
                    className="btn bg-yellow-300 text-lg hover:text-white text-black "
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
<div className="ad flex justify-center items-center mt-5">
<div className="collapse bg-base-200  w-[70%]">
  <input type="checkbox" className="peer" /> 
  <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
    Developed by <b>Suman Yadav</b>
  </div>
  <a href="http://google.com"  target="_blank" rel="nooppener noreferrer" className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content"> 
    <div className="font-bold" >Check My Portfolio</div>
  </a>
</div>
</div>

</div>

    </div>
  );
};

export default ToDo;
