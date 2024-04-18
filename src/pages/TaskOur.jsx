// import React from "react";

// const TaskOur = ({ task, index,expectedTime}) => {

    
      
//   return (
    
//     <div>
//      <div
//             key={index}
//             className={`ourTask flex flex-col justify-around items-center gap-2 mt-5 `}
//           >
//             <div className="task h-20 w-[80%] bg-red-50">
//               <div className="form-control bg-gray-300 h-full w-full flex flex-row justify-around items-center">
//                 <input
//                   type="checkbox"
//                   className="checkbox"
//                   checked={completedTasks[index]}
//                   onClick={() => handleCheck(index)}
//                 />
//                 <div
//                   className={`label-text ${
//                     completedTasks[index] ? "line-through" : ""
//                   }`}
//                 >
//                   {index} . {task}
//                 </div>
//                 <div className="label-text">{expectedTime}</div>
//                 <div className="label-text w-[10%] flex ">
//                   <div
//                     className="btn btn-ghost "
//                     onClick={() => handleEdit(index)}
//                   >
//                     edit
//                   </div>
//                   <div
//                     className="btn btn-ghost"
//                     onClick={() => handleDelete(index)}
//                   >
//                     delete
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
      
//     </div>
//   );
// };

// export default TaskOur;
