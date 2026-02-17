import React from 'react'

const AcceptTask = ({data}) => {
  return (
    <div>
        <div className='shrink-0 w-75 h-60 p-5 bg-red-300 rounded-xl flex flex-col justify-between'>
            <div className='flex justify-between items-center '>
                <h3 className='bg-red-500 text-white text-sm px-3 py-1 rounded-lg'>{data.category}</h3>
                <h4 className='text-sm font-medium'>{data.date}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
            <p className='text-sm mt-2 '> {data.taskDescription}</p>
            <div className='flex mt-5 justify-between'>
                <button className='bg-blue-500 text-white px-3 py-1 text-sm rounded-lg'>Active Task</button>
                
            </div>

        </div>
    </div>
  )
}

export default AcceptTask
