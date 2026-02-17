import React from 'react'
import TaskListNumber from '../../others/TaskListNumber'
import Header from '../../others/Header'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = (props) => {
  return (
    <>
        <div className='p-10 bg-[#2c2c2c] h-screen '>
     <Header   data={props.data} changeUser={props.changeUser} />
     <TaskListNumber data={props.data} />
     <TaskList  data={props.data} />
      
      </div>
      
    </>
  )
}

export default EmployeeDashboard
