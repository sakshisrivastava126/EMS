import React, { useState, useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {

  const [userData, setUserData] = useContext(AuthContext)

  const [taskTitle, setTaskTitle] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const [taskDate, setTaskDate] = useState('')
  const [assignTo, setAssignTo] = useState('')
  const [category, setCategory] = useState('')

  const [newtask, setNewTask] = useState({})

  const submitHandler = (e) => {
    e.preventDefault()

    const taskData = {taskTitle, taskDate, taskDescription, category, active:false, newTask: true, failed:false,completed:false}

    const data = userData
      
    data.forEach(function(elem){
      if(assignTo == elem.firstName){
        elem.tasks.push(taskData)
        elem.taskCount.newTask = elem.taskCount.newTask+1
      }
    })
    setUserData(data)
    console.log(data);

    setTaskDate("")
    setCategory("")
    setTaskDescription("")
    setTaskTitle("")
    setAssignTo("")    
  }

  return (
    <div>
      <div>
        <form onSubmit={(e) => {
          submitHandler(e)
        }}
         className='flex flex-col w-full p-6 bg-blue-400 gap-6 mt-8 rounded-xl'>
          <div className='flex gap-8'>
            <div className='w-1/2 space-y-4'>
              <div>
                <h3 className='font-semibold text-[#173254] text-2xl'>Task Title</h3>
                <input 
                value={taskTitle}
                onChange={(e)=>{
                  setTaskTitle(e.target.value)
                }}
                type="text" placeholder='Create a design' className='w-full p-2 rounded border-1 border-black'/>
              </div>

              <div>
                <h3 className='font-semibold text-[#173254] text-2xl'>Date</h3>
                <input 
                value={taskDate}
                onChange={(e)=>{
                  setTaskDate(e.target.value)
                }}
                type="date" className='w-full p-2 rounded'/>
              </div>
              
              <div>
                <h3 className='font-semibold text-[#173254] text-2xl'>Assign To</h3>
                <input 
                value={assignTo}
                onChange={(e)=>{
                  setAssignTo(e.target.value)
                }}
                type="text" placeholder='Employee Name' className='w-full p-2 rounded'/>
              </div>
              
              <div>
                <h3 className='font-semibold text-[#173254] text-2xl'>Category</h3>
                <input 
                value={category}
                onChange={(e)=>{
                  setCategory(e.target.value)
                }}
                type="text" placeholder='design, dev etc' className='w-full p-2 rounded'/>
              </div>
            </div>
              
            <div className='w-1/2'>
              <h3 className='font-semibold text-[#173254] text-2xl'>Description</h3>
              <textarea 
              value={taskDescription}
              onChange={(e)=>{
                setTaskDescription(e.target.value)
              }}
              name="" id="" cols="30" rows="10" className='w-full p-2 rounded'></textarea>
            </div>
          </div>
           
          <button className='bg-[#173254] text-white px-6 py-3 rounded-lg self-end'>Create Task</button>
        </form>
      </div>
    </div>
  )
}

export default CreateTask