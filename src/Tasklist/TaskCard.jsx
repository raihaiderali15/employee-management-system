import ActiveTask from "./ActiveTask";
import CompletedTask from "./CompletedTask";
import FailedTask from "./FailedTask";
import NewTask from "./NewTask";
import { useData } from "../Context/ContextData.jsx";
import { useEffect } from "react";
const TaskCard = ({ whichEmpl }) => {
  const { setLoginEmp, setEmployees ,employees} = useData();
useEffect(() => {
  let idCounter = 0;

  const updatedEmployees = employees.map(emp => ({
    ...emp,
    tasks: emp.tasks.map(task => {
      idCounter++;
      return { ...task, id: idCounter };
    })
    
  }));

  setEmployees(updatedEmployees);
  localStorage.setItem("employees", JSON.stringify(updatedEmployees));
  const logindinEmp=JSON.parse(localStorage.getItem(("loginEmp")));
  if(logindinEmp){
    console.log("logdin employee",logindinEmp)
    const updatedLoginEmp=updatedEmployees.find((e)=>(e.email===logindinEmp.email))
 setLoginEmp(updatedLoginEmp);
 localStorage.setItem("loginEmp",JSON.stringify(updatedLoginEmp))

  }

}, []);

  //Completed Task
  const completedTask = (id) => {
    const uptadtedTask = whichEmpl.tasks.map((task) =>
      task.id === id ?{ ...task, active: false, completed: true } : task,
  
    );
    const uptadedTaskCount = {
      ...whichEmpl.taskCount,
      completed: whichEmpl.taskCount.completed + 1,
      active:whichEmpl.taskCount.active -1
    };

    let UptadedLoginEmployee = {
      ...whichEmpl,
      tasks: uptadtedTask,
      taskCount: uptadedTaskCount,
    };

    setLoginEmp(UptadedLoginEmployee);
    localStorage.setItem("loginEmp", JSON.stringify(UptadedLoginEmployee));
    let employees = JSON.parse(localStorage.getItem("employees"));
    let UptadedEmployee = employees.map((emp) =>
      emp.firstName === whichEmpl.firstName ? UptadedLoginEmployee : emp,
    );
    setEmployees(UptadedEmployee);
    localStorage.setItem("employees", JSON.stringify(UptadedEmployee));
  };

  //accept Task
  const acceptTask = (id) => {
     const uptadtedTask = whichEmpl.tasks.map((task) =>
      task.id === id ?{ ...task, active: true, newTask:false } : task,
  
    );
    const uptadedTaskCount = {
      ...whichEmpl.taskCount,
      active: whichEmpl.taskCount.active+ 1,
      newTask:whichEmpl.taskCount.newTask-1
    };

    let UptadedLoginEmployee = {
      ...whichEmpl,
      tasks: uptadtedTask,
      taskCount: uptadedTaskCount,
    };
      setLoginEmp(UptadedLoginEmployee);
    localStorage.setItem("loginEmp", JSON.stringify(UptadedLoginEmployee));
    let employees = JSON.parse(localStorage.getItem("employees"));
    let UptadedEmployee = employees.map((emp) =>
      emp.firstName === whichEmpl.firstName ? UptadedLoginEmployee : emp,
    );
    setEmployees(UptadedEmployee);
    localStorage.setItem("employees", JSON.stringify(UptadedEmployee));
  };
//Failed Task
const failedTask=(id)=>{
     const uptadtedTask = whichEmpl.tasks.map((task) =>
      task.id === id ?{ ...task, active: false, failed:true } : task,
  
    );
    const uptadedTaskCount = {
      ...whichEmpl.taskCount,
      failed: whichEmpl.taskCount.failed+ 1,
      active:whichEmpl.taskCount.active-1
    };

    let UptadedLoginEmployee = {
      ...whichEmpl,
      tasks: uptadtedTask,
      taskCount: uptadedTaskCount,
    };

    setLoginEmp(UptadedLoginEmployee);
    localStorage.setItem("loginEmp", JSON.stringify(UptadedLoginEmployee));
    let employees = JSON.parse(localStorage.getItem("employees"));
    let UptadedEmployee = employees.map((emp) =>
      emp.firstName === whichEmpl.firstName ? UptadedLoginEmployee : emp,
    );
    setEmployees(UptadedEmployee);
    localStorage.setItem("employees", JSON.stringify(UptadedEmployee));
}
  return (
    <div>
      <div className="flex  flex-col  gap-7  md:flex md:flex-row  w-full   flex-nowrap overflow-x-auto">
        {whichEmpl.tasks.map((e, idx) => {
          if (e.active) {
            return <ActiveTask e={e} key={idx} completedTask={()=>{completedTask(e.id)}} failedTask={()=>{failedTask(e.id)}} />;
          }
          if (e.completed) {
            return <CompletedTask e={e} key={idx} />;
          }
          if (e.failed) {
            return <FailedTask e={e} key={idx} />;
          }
          if (e.newTask) {
            return <NewTask e={e} key={idx} acceptTask={()=>acceptTask(e.id)} />;
          }
        })}
      </div>
    </div>
  );
};

export default TaskCard;
