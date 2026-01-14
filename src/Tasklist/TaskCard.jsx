import React from "react";
import ActiveTask from "./ActiveTask";
import CompletedTask from "./CompletedTask";
import FailedTask from "./FailedTask";
import NewTask from "./NewTask";

const TaskCard = ({ whichEmpl }) => {
  
  
  return (
    <div>
      <div className="flex  flex-col  gap-7  md:flex md:flex-row  w-full   flex-nowrap overflow-x-auto">
        {whichEmpl.tasks.map((e,idx) => {
          if(e.active){ return <ActiveTask e={e} key={idx}/>}
          if(e.completed){return <CompletedTask e={e} key={idx}/>}
          if(e.failed){return <FailedTask e={e} key={idx} /> }
          if(e.newTask){return <NewTask e={e} key={idx}/>}
        })}
      </div>
    </div>
  );
};

export default TaskCard;
