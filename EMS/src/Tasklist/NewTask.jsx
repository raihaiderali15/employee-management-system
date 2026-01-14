import React from 'react'

const NewTask = ({e}) => {
  return (
     <div className="shrink-0  h-60 md:w-80 bg-blue-400 rounded-3xl flex flex-col gap-3">
              <div>
                <div className="flex justify-between p-2">
                  <h2 className=" bg-red-700 font-bold text-xl rounded-xl px-3 py-1">
                  {e.category}
                  </h2>
                  <h5 className="text-md font-semibold p-2">{e.date}</h5>
                </div>
                <div>
                  <h1 className="text-2xl font-bold p-2">{e.taskTitle}</h1>
                  <p className="p-2 text-sm ">
                   {e.taskDescription}
                  </p>
                </div>
              </div>
              <div className='text-center mt-2'> 
                    <button className='bg-yellow-600 rounded border-none md:p-1 md:text-md text-[15px] p-1'>Accept new Task</button>
              </div>
            </div>
  )
}

export default NewTask
