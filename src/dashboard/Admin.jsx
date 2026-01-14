import React from "react";
import Tasklist from "../others/Tasklist";
import Header from "../others/header";
import TaskDetail from "../others/TaskDetail";
const Admin = ({logOut}) => {
 
  return (
    <div className="bg-[#1c1c1c] md:p-10 p-3  text-white flex flex-col md:gap-10 gap-5">
      <Header logOut={logOut} name="Admin" />
      <Tasklist/>
    <TaskDetail/>

    </div>
  );
};

export default Admin;
