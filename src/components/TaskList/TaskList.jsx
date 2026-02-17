import React from 'react'
import NewTask from './NewTask'
import AcceptTask from './AcceptTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {
  return (
   
      <div id='TaskList' className=' h-[55%] flex overflow-x-auto justify-start gap-5 flex-nowrap  py-5 items-center w-full  mt-5 rounded'>
      {data.tasks.map((elem,index) => {
        if(elem.newTask){
            return <NewTask key={index} data={elem} />
        }
        
        if(elem.active){
            return <AcceptTask key={index} data={elem}   />
        }
        
        if(elem.completed){
            return <CompleteTask key={index} data={elem} />
        }
        if(elem.failed){
            return <FailedTask key={index} data={elem} />
        }
      }
        )}
        
      </div>
    
  )
}

export default TaskList
