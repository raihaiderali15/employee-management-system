import React, { useState } from "react";

const Login = ({loginCheck}) => {
const[Email,setEmail]=useState("")
const[Pass,setPass]=useState("")

  const formSubmitter = (e) => {
    e.preventDefault();
    loginCheck(Email,Pass)
    setEmail("")
    setPass("")
    

  };
  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="bg-[#1c1c1c] md:w-100 md:h-fit px-5 py-8   h-screen  w-screen">
        <form
          onSubmit={(e) => {
            formSubmitter(e);
          }}
          className="flex flex-col gap-10"
        >
          <div>
            <h1 className="text-3xl font-bold md:mb-8  mb-15">Login</h1>
          </div>
          <div className="flex flex-col gap-4 ">
            <input 
            required
              value={Email}  
              onChange={(e) => {
                setEmail(e.target.value)
              }}
             type="email"
              placeholder="Email"
              className="border border-red-400 rounded-2xl w-75 px-4 py-2 focus:outline-none focus:border focus-border-red focus:shadow-none focus:bg-[#1c1c1c]"
            />
            <input 
            required
              type="text"
              value={Pass}
              onChange={(e)=>{
                setPass(e.target.value)
              }}
              placeholder="Passward"
              className="border border-red-400 rounded-2xl w-75 px-4 py-2 focus:outline-none focus:border focus-border-red focus:shadow-none focus:bg-[#1c1c1c]"
            />
          </div>
          <div className="flex justify-between px-3">
            <div>
              <label>
                <input type="checkbox" className="" />
                <span className="ml-1">Remember Me</span>
              </label>
            </div>

            <div>
              <button className="text-red-400 font-extralight">
                Forget Passward
              </button>
            </div>
          </div>
          <div className="text-center">
            <button className=" bg-red-500 w-75 rounded-2xl px-3 py-1.5 text-2xl font-bold mt-15">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

7;
