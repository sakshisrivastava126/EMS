import React from 'react'

const AcceptTask = ({data, taskIndex, onTaskUpdate}) => {
    
  const handleMarkCompleted = () => {
    // ye completed task Update krega
    const updatedTask = {
      ...data,
      active: false,
      completed: true,
      failed: false,
      newTask: false
    }
    // ye update function ko call krega
    onTaskUpdate(taskIndex, updatedTask)
  }

  const handleMarkFailed = () => {
    // ye failed task Update krega
    const updatedTask = {
      ...data,
      active: false,
      completed: false,
      failed: true,
      newTask: false
    }
    onTaskUpdate(taskIndex, updatedTask)
  }

  return (
    <div className='flex-shrink-0 p-7 h-[340px] w-[332px] bg-[#1e4e8a] text-white rounded-xl flex flex-col justify-between'>
        <div className='flex justify-between items-center text-white'>
            <h3 className='bg-pink-300 px-3 py-1 rounded text-black'>{data.category}</h3>
            <h4>{data.date}</h4>
        </div>
        <div className='flex-1'>
            <h2 className='mt-5 text-2xl font-semibold line-clamp-2'>{data.taskTitle}</h2>
            <p className='text-sm mt-2 line-clamp-3'>
               {data.taskDescription}
            </p>
        </div>
        <div className='flex justify-between mt-4'>
            <button 
              onClick={handleMarkCompleted}
              className='bg-green-400 py-2 px-3 text-sm rounded hover:bg-green-500 transition-colors'
            >
              Mark as Completed
            </button>
            <button 
              onClick={handleMarkFailed}
              className='bg-red-400 py-2 px-3 text-sm rounded hover:bg-red-500 transition-colors'
            >
              Mark as Failed
            </button>
        </div>
    </div>
  )
}

export default AcceptTask