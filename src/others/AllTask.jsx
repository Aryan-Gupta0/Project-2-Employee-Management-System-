import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'

const AllTask = () => {

  const [userData, setUserData] = useContext(AuthContext)

  return (
    <div className='mt-2'>

      {/* Header */}
      <div className='flex items-center justify-around 
                  py-1 px-1 sm:px-3 
                  border border-white bg-white 
                  text-[10px] sm:text-md font-semibold'>

        <h2 className='w-1/5 text-center'>Employee</h2>
        <h2 className='w-1/5 text-center'>New Task</h2>
        <h2 className='w-1/5 text-center'>Active Task</h2>
        <h3 className='w-1/5 text-center'>Completed Task</h3>
        <h3 className='w-1/5 text-center'>Failed Task</h3>
      </div>

      {/* Data */}
      <div className='max-h-60 overflow-y-auto'>
        {userData?.map((elem, index) => (
          <div
            key={index}
            className='flex items-center justify-around 
                   py-1 px-1 sm:px-3 
                   border border-white mt-1 
                   text-[10px] sm:text-md font-semibold'
          >
            <h2 className='w-1/5 text-white text-center'>
              {elem.firstName}
            </h2>

            <h2 className='w-1/5 text-blue-400 text-center'>
              {elem.taskNumbers.newTask}
            </h2>

            <h2 className='w-1/5 text-yellow-400 text-center'>
              {elem.taskNumbers.active}
            </h2>

            <h3 className='w-1/5 text-green-400 text-center'>
              {elem.taskNumbers.completed}
            </h3>

            <h3 className='w-1/5 text-red-400 text-center'>
              {elem.taskNumbers.failed}
            </h3>
          </div>
        ))}
      </div>

    </div>
  )
}

export default AllTask
