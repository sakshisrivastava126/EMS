import React, { useContext } from 'react'
import Header from '../Others/Header'
import TaskListNumbers from '../Others/TaskListNumbers'
import TaskList from '../TaskList/TaskList'
import { AuthContext } from '../../context/AuthProvider'

const EmployeeDashboard = (props) => {
  const [userData, setUserData] = useContext(AuthContext)

  const handleTaskUpdate = (taskIndex, updatedTask) => {
    // ye current user data ko copy krega
    const updatedUserData = [...userData]
    
    // ye current employee ko find krega
    const employeeIndex = updatedUserData.findIndex(emp => emp.id === props.data.id)
    
    if (employeeIndex !== -1) {
      // ye Update krega specific task ko
      updatedUserData[employeeIndex].tasks[taskIndex] = updatedTask
      
      // ye new task count batayega
      const newTaskCount = updatedUserData[employeeIndex].tasks.filter(task => task.newTask).length
      const activeTaskCount = updatedUserData[employeeIndex].tasks.filter(task => task.active).length
      const completedTaskCount = updatedUserData[employeeIndex].tasks.filter(task => task.completed).length
      const failedTaskCount = updatedUserData[employeeIndex].tasks.filter(task => task.failed).length
      
      updatedUserData[employeeIndex].taskCount = {
        total: updatedUserData[employeeIndex].tasks.length,
        newTask: newTaskCount,
        active: activeTaskCount,
        completed: completedTaskCount,
        failed: failedTaskCount
      }
      
      // ye context ko update krega
      setUserData(updatedUserData)
      
      // ye localStorage ko update krega
      localStorage.setItem('employees', JSON.stringify(updatedUserData))
    }
  }

  return (
    <div>
        <div className='p-10 bg-[#1C1C1C] h-screen'>
            <Header changeUser={props.changeUser} data={props.data} />
            <TaskListNumbers data={props.data} />
            <TaskList data={props.data} onTaskUpdate={handleTaskUpdate} />
        </div>
    </div>
  )
}

export default EmployeeDashboard