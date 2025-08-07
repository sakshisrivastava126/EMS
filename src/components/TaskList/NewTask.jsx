import React from 'react'

const NewTask = ({data, taskIndex, onTaskUpdate}) => {
  
  const handleAcceptTask = () => {
    // ye task Update krega
    const updatedTask = {
      ...data,
      newTask: false,
      active: true,
      completed: false,
      failed: false
    }
    
    // ye update function ko call krega
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
        <div className='mt-4'>
            <button 
              onClick={handleAcceptTask}
              className='bg-yellow-300 text-black w-full text-sm py-2 rounded hover:bg-yellow-400 transition-colors'
            >
              Accept New Task
            </button>
        </div>
    </div>
  )
}

export default NewTask