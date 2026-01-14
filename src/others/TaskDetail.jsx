const TaskDetail = () => {
let authdata = JSON.parse(localStorage.getItem("employees"));
  return (
    <div className="flex flex-col gap-3  ">
      <div className="w-full flex justify-between bg-red-500 p-2 text-[16px] font-medium rounded ">
        <h3 className="w-[10%] md:text-lg text-[12px]">Employee Name</h3>
        <h3 className="w-[10%] md:text-lg text-[12px]">New Task</h3>
        <h3 className="w-[10%] md:text-lg text-[12px]">Active Task</h3>
        <h3 className="w-[10%] md:text-lg text-[12px]">Completed</h3>
        <h3 className="w-[10%] md:text-lg text-[12px]">Failed</h3>
      </div>
      {authdata.map((e, idx) => {
        return (
          <div
            key={idx}
            className="w-full flex justify-between border-2 border-red-400 p-2 rounded "
          >
            <h4 className="w-[10%]  font-bold text-[15px] ">{e.firstName}</h4>
            <h4 className="w-[10%]  text-blue-400 text-xl">
              {e.taskCount.newTask}
            </h4>
            <h4 className="w-[10%]  text-yellow-400 text-xl">
              {e.taskCount.active}
            </h4>
            <h4 className="w-[10%]  text-green-400 text-xl">
              {e.taskCount.completed}
            </h4>
            <h4 className="w-[10%]  text-red-400 text-xl">
              {e.taskCount.failed}
            </h4>
          </div>
        );
      })}
    </div>
  );
};

export default TaskDetail;
