import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'

const AllTask = () => {

  const [userData,setUserData] = useContext(AuthContext)

  return (
    <div className='bg-[#2c2c2c] px-4 rounded mt-3 h-100'>
      
      <div className='text-white font-bold text-md flex items-center justify-center mb-3'>
        All Employees Data
      </div>

      <div className='flex items-center justify-around py-1 px-3 border text-md font-semibold border-white  bg-white'>
        <h2 className='w-1/5 px-10'>Employee Name</h2>
        <h2 className='w-1/5 px-10'> New Task</h2>
        <h2 className='w-1/5 px-10 '>Active Task</h2>
        <h3 className='w-1/5 px-10'>Completed Task</h3>
        <h3 className='w-1/5 px-10 '>Failed Task</h3>
      </div>

      <div id='scroll' className='h-40 '>
        {userData?.map(function(elem, index) { 
         return (
          <div key={index} className='flex items-center justify-around py-1 px-3 border border-white mt-1 text-md font-semibold'>
           <h2 className='w-1/5 px-10 text-white'>{elem.firstName}</h2>
        <h2 className='w-1/5 px-10 text-blue-400'>{elem.taskNumbers.newTask}</h2>
        <h2 className='w-1/5 px-10 text-yellow-400'>{elem.taskNumbers.active}</h2>
        <h3 className='w-1/5 px-10 text-green-400'>{elem.taskNumbers.completed}</h3>
        <h3 className='w-1/5 px-10 text-red-400'>{elem.taskNumbers.failed}</h3>
          </div>
       ) })}
      </div>

    </div>
  )
}

export default AllTask
