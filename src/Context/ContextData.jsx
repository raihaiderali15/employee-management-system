import { createContext, useContext, useEffect, useState } from "react";



const DataContext = createContext();

export const DataProvider = ({ children }) => {

  const [employees, setEmployees] = useState(null);

  const [admin, setAdmin] = useState(null);

  const [loginEmp, setLoginEmp] = useState(null);

  const [loginUser, setLoginUser] = useState(null);
 console.log(employees)


  return (
    <DataContext.Provider
      value={{
        employees,
        setEmployees,
        admin,
        setAdmin,
        loginEmp,
        setLoginEmp,
        loginUser,
        setLoginUser
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
