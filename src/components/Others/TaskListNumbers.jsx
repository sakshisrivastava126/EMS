import React from 'react'

const TaskListNumbers = ({data}) => {
  return (
    <div className='flex mt-10 justify-between gap-5 screen'>
        <div className='py-6 px-9 rounded-xl w-[45%] bg-[#1e4e8a] text-white'>
            <h2 className='text-2xl font-semibold'>{data.taskCount.newTask}</h2>
            <h2 className='text-3xl font-semibold'>New Task</h2>
        </div>
        <div className='py-6 px-9 rounded-xl w-[45%] bg-[#1d71d8] text-white'>
            <h2 className='text-2xl font-semibold'>{data.taskCount.completed}</h2>
            <h2 className='text-3xl font-semibold'>Completed Task</h2>
        </div>
        <div className='py-6 px-9 rounded-xl w-[45%] bg-blue-400 text-white'>
            <h2 className='text-2xl font-semibold'>{data.taskCount.active}</h2>
            <h2 className='text-3xl font-semibold'>Active Task</h2>
        </div>
        <div className='py-6 px-9 rounded-xl w-[45%] bg-[#93c2fd] text-white'>
            <h2 className='text-2xl font-semibold'>{data.taskCount.failed}</h2>
            <h2 className='text-3xl font-semibold'>Failed Task</h2>
        </div>
    </div>
  )
}

export default TaskListNumbers