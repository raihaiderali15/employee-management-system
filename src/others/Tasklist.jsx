import React, { useState } from "react";
import TaskDetail from "./TaskDetail";

const Test = () => {
  const [taskTitle, settaskTitle] = useState("");
  const [date, setdate] = useState("");
  const [assignTo, setassignTo] = useState("");
  const [category, setcategory] = useState("");
  const [description, setdescription] = useState("");


  return (
    <div>
      <div className="text-center p-3 font-bold text-3xl text-red-500 mb-5">
        {" "}
        <h1>Admin Panel</h1>{" "}
      </div>

      <form
       onSubmit={(e) => {
  e.preventDefault();
  
  const taskData = {
    taskTitle,
    date,
    assignTo,
    category,
    description,
    active: false,
    newTask: true,
    completed: false,
    failed: false,
  };

  const employees = JSON.parse(localStorage.getItem("employees")) || [];

  const updatedEmployees = employees.map(emp => {
    if (emp.firstName === assignTo) {
      return {
        ...emp,
        tasks: [...emp.tasks, taskData],
        taskCount: {
          ...emp.taskCount,
          newTask: emp.taskCount.newTask + 1
        }
      };
    }
    return emp;
  });

  localStorage.setItem("employees", JSON.stringify(updatedEmployees));
}}

        className="md:flex md:flex-row md:justify-between  bg-[#1c1c1c] w-full md:p-5 flex flex-col gap-4 p-2 "
      >
        <div className="flex flex-col gap-8 md:w-[50%] w-full">
          <div>
            <h3> Task Title</h3>
            <input
              className="border border-red-400 rounded-xl w-full p-2 focus:outline-none focus:border focus-border-red focus:shadow-none focus:bg-[#1c1c1c]"
              type="text"
              placeholder="Make a UI design"
              onChange={(e) => {
                settaskTitle(e.target.value);
              }}
            />
          </div>
          <div>
            <h3> Date</h3>
            <input
              className="border  border-red-400 rounded-xl w-full p-2 focus:outline-none focus:border focus-border-red focus:shadow-none focus:bg-[#1c1c1c]"
              type="date"
              onChange={(e) => {
                setdate(e.target.value);
              }}
            />
          </div>
          <div>
            <h3> Asign to</h3>
            <input
              className="border  border-red-400 rounded-xl w-full p-2 focus:outline-none focus:border focus-border-red focus:shadow-none focus:bg-[#1c1c1c]"
              type="text"
              placeholder="Employee name"
              onChange={(e) => {
                setassignTo(e.target.value);
              }}
            />
          </div>
          <div>
            <h3> Category</h3>
            <input
              className="border  border-red-400 rounded-xl w-full p-2 focus:outline-none focus:border focus-border-red focus:shadow-none focus:bg-[#1c1c1c]"
              type="text"
              placeholder="design,dev,etc"
              onChange={(e) => {
                setcategory(e.target.value);
              }}
            />
          </div>
        </div>

        <div className="flex flex-col md:items-baseline-last gap-8 md:w-[50%] w-full ">
          <div >
            <h3> Description</h3>
            <textarea
            cols={25}
            rows={6}
              onChange={(e) => {
                setdescription(e.target.value);
              }}
              className="border border-red-400 focus:outline-none focus:border focus-border-red focus:shadow-none focus:bg-[#1c1c1c] p-3"
            ></textarea>
          </div>
          <div className="text-center">
            <button className=" bg-red-500  w-70 rounded-2xl px-3 py-1.5 md:text-2xl text-xl text-center font-bold">
              Create Task
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Test;
