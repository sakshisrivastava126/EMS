import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({data, onTaskUpdate}) => {
  return (
    <div id='taskList' className='h-[55%] flex overflow-x-auto items-center justify-start gap-5 flex-nowrap w-full py-5 rounded-xl mt-10'>
        {data.tasks.map((elem, idx)=>{
            if(elem.active){
                return <AcceptTask key={idx} data={elem} taskIndex={idx} onTaskUpdate={onTaskUpdate}/>
            }
            if(elem.newTask){
                return <NewTask key={idx} data={elem} taskIndex={idx} onTaskUpdate={onTaskUpdate}/>
            }
            if(elem.completed){
                return <CompleteTask key={idx} data={elem} taskIndex={idx} onTaskUpdate={onTaskUpdate}/>
            }
            if(elem.failed){
                return <FailedTask key={idx} data={elem} taskIndex={idx} onTaskUpdate={onTaskUpdate}/>
            }
            return null; // agar koi condition match nahi hui toh yeh run hoga
        })}
    </div>
  )
}

export default TaskList