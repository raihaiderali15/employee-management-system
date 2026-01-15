import { useEffect, useState } from "react";
import Login from "./Components/author/Login";
import Employee from "./dashboard/Employee";
import Admin from "./dashboard/admin";
import { setLocalStorage } from "./Components/author/utils/LocalStorage";
const App = () => {
  //useStates
  const [role, setRole] = useState("");
  const adminData = JSON.parse(localStorage.getItem("admin"));
  const emplData = JSON.parse(localStorage.getItem("employees"));
    if(!adminData || !emplData){
      setLocalStorage()
    }
//Authentication Processs

  const loginCheck = (email, passward) => {   
  const loginAdmin = adminData?.find((e) => email == e.email && passward == e.password); 
    const logindinEmp =emplData?.find((e) => email == e.email && passward == e.password);
    if(loginAdmin){
      setRole("admin");
      localStorage.setItem("loginUser", JSON.stringify({ role: "admin" }));
    }
   else if(logindinEmp){
      setRole("employee");
      localStorage.setItem("loginUser", JSON.stringify({ role: "employee" }));
      localStorage.setItem("loginEmp", JSON.stringify(logindinEmp));
 }
   
 else {
      alert("Invalid Credentials");
    }
  };
//Login automatic from local storage based on previous  login
  const autoLogin = () => {
    let userData = JSON.parse(localStorage.getItem("loginUser"));
    if (userData && userData.role) {
      userData = userData.role;
      setRole(userData);
    }
  };
  useEffect(() => {
    autoLogin();
  }, []);
//Logout 
  const logOut = () => {
    localStorage.removeItem("loginUser");
    localStorage.removeItem("loginEmp");
    setRole("");
  };

  

  return (
    <div className="h-screen bg-black text-white">
      {!role ? <Login loginCheck={loginCheck} /> : ""}
      {role == "admin" && <Admin logOut={logOut} />}
      {role == "employee" && <Employee logOut={logOut} />}
    </div>
  );
};

export default App;
