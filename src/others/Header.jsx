import React from 'react'

const Header = ({logOut,name}) => {
  
        
   
  return (
    <div>
      <div className="flex justify-between ">
          <div>
            <h3 className="text-xl font-medium">
              Hello,
              <br />
              <span className="text-3xl font-bold">{name}</span>{" "}
            </h3>
          </div>
          <div>
            <button onClick={logOut} className="bg-red-500 px-3 py-1 rounded ">Logout</button>
          </div>
        </div>
    </div>
  )
}

export default Header
