
import TaskCard from "../Tasklist/TaskCard";
import Header from "../others/header";
const Employee = ({logOut}) => {
    
 const whichEmpl=JSON.parse(localStorage.getItem("loginEmp"))
   

   return (
    <div className="flex items-center justify-center h-fit w-screen ">
      <div className="bg-[#1c1c1c] md:h-screen md:w-full  w-screen p-15 flex flex-col gap-10">
      <Header logOut={logOut} name={whichEmpl.firstName} />
        <div className="h-auto flex  items-center flex-wrap gap-8">
          <div className=" rounded-xl h-40 w-70  bg-blue-400">
            <div className="flex flex-col justify-between  h-full p-3 font-bold">
              <p className="text-4xl">{whichEmpl.taskCount.newTask}</p>
              <p className="text-3xl">New Task</p>
            </div>
          </div>
          <div className=" rounded-xl h-40 w-70  bg-green-400">
            <div className="flex flex-col justify-between  h-full p-3 font-bold">
              <p className="text-4xl">{whichEmpl.taskCount.completed}</p>
              <p className="text-3xl">Completed</p>
            </div>
          </div>
          <div className=" rounded-xl h-40 w-70  bg-yellow-400">
            <div className="flex flex-col justify-between  h-full p-3 font-bold">
              <p className="text-4xl">{whichEmpl.taskCount.active}</p>
              <p className="text-3xl">Accepted</p>
            </div>
          </div>
          <div className=" rounded-xl h-40 w-70  bg-red-600">
            <div className="flex flex-col justify-between  h-full p-3 font-bold">
              <p className="text-4xl">{whichEmpl.taskCount.failed}</p>
              <p className="text-3xl">Failed</p>
            </div>
          </div>
        </div>
        <TaskCard whichEmpl={whichEmpl}/>
      </div>
    </div>
  );
};

export default Employee;

