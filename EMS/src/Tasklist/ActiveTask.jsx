import React from 'react'

const ActiveTask = ({e}) => {
  return (
     <div className="shrink-0  h-60 md:w-80 bg-yellow-400 rounded-3xl flex flex-col gap-3">
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
              <div className='flex justify-around mt-2'> 
                    <button className='bg-green-500 rounded border-none md:p-1 md:text-md text-[10px] p-1'>Mark as Completed</button>
                    <button className='bg-red-600 rounded border-none md:p-1 md:text-md text-[10px] p-1 '>Mark as Failed</button>

              </div>
            </div>
  )
}

export default ActiveTask
