import React from 'react'

const TaskListNumber = ({ data }) => {
  return (
    <div className='grid grid-cols-2 lg:grid-cols-4 gap-5 mt-10'>

      <div className='bg-blue-400 rounded-2xl py-5 px-5'>
        <h2 className='text-2xl sm:text-3xl font-semibold'>
          {data.taskNumbers.newTask}
        </h2>
        <h3 className='text-lg sm:text-2xl font-semibold'>
          New Task
        </h3>
      </div>

      <div className='bg-green-400 rounded-2xl py-5 px-5'>
        <h2 className='text-2xl sm:text-3xl font-semibold'>
          {data.taskNumbers.completed}
        </h2>
        <h3 className='text-lg sm:text-2xl font-semibold'>
          Complete Task
        </h3>
      </div>

      <div className='text-black bg-yellow-400 rounded-2xl py-5 px-5'>
        <h2 className='text-2xl sm:text-3xl font-semibold'>
          {data.taskNumbers.active}
        </h2>
        <h3 className='text-lg sm:text-2xl font-semibold'>
          Accept Task
        </h3>
      </div>

      <div className='bg-red-400 rounded-2xl py-5 px-5'>
        <h2 className='text-2xl sm:text-3xl font-semibold'>
          {data.taskNumbers.failed}
        </h2>
        <h3 className='text-lg sm:text-2xl font-semibold'>
          Failed Task
        </h3>
      </div>

    </div>
  )
}

export default TaskListNumber