import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

    const [userData, setUserData] = useContext(AuthContext)

  return (
    <div className='bg-blue-100 p-5 mt-5 w-full rounded h-100 text-white'>
        <div className='bg-[#173254] mb-2 py-3 px-3 flex justify-between items-center rounded h-16'>
                <h2 className='m-0 text-lg w-1/5 font-bold'>Employee Name</h2>
                <h3 className='m-0 text-lg w-1/5 font-bold'>New Task</h3>
                <h5 className='m-0 text-lg w-1/5 font-bold'>Active Task</h5>
                <h5 className='m-0 text-lg w-1/5 font-bold'>Completed Task</h5>
                <h5 className='m-0 text-lg w-1/5 font-bold'>Failed Task</h5>
        </div>

        <div className='overflow-auto'>
            {userData.map(function(elem, idx){
                return(
                <div key={idx} className='bg-[#1e4e8a] mb-2 py-3 px-3 flex justify-between items-center rounded h-16'>
                    <h2 className='text-lg font-semibold m-0 w-1/5 '>{elem.firstName}</h2>
                    <h3 className='text-lg m-0 w-1/5 '>{elem.taskCount.newTask}</h3>
                    <h5 className='text-lg m-0 w-1/5 '>{elem.taskCount.active}</h5>
                    <h5 className='text-lg m-0 w-1/5 '>{elem.taskCount.completed}</h5>
                    <h5 className='text-lg m-0 w-1/5 '>{elem.taskCount.failed}</h5>
                </div>
            )})}
        </div>
        
        

    </div>
  )
}

export default AllTask