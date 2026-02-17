import React , {useContext, useState} from 'react'
import { AuthContext } from '../context/AuthProvider'

const CreateTask = () => {

  const [userData,setUserData] = useContext(AuthContext)

  const [taskTitle,setTaskTitle] = useState('')
  const [taskDescription,setTaskDescription] = useState('')
  const [taskDate,setTaskDate] = useState('')
  const [taskAssignTo,setTaskAssignTo] = useState('')
  const [taskCategory,setTaskCategory] = useState('')

 const [newTasks,setNewTasks] = useState({})




const submitHandler = (e) => {
  e.preventDefault()
}


  return (
    <div className='p-2 bg-[#2c2c2c] mt-4 rounded'>
      <form
      onSubmit={(e)=>{
        submitHandler(e)

setNewTasks({taskTitle,taskDescription,taskDate,taskCategory,active:false,newTask:true,completed:false,failed:false})

        const data = userData
       
       data.forEach(function(elem){
        if(taskAssignTo == elem.firstName){
          elem.tasks.push(newTasks)
          elem.taskNumbers.newTask = elem.taskNumbers.newTask + 1
        }
        
        })
        setUserData(data)
        console.log(data);
        


        setTaskTitle('')
        setTaskDescription('')
        setTaskDate('')
        setTaskAssignTo('')
        setTaskCategory('')
        
      }}
      
      className= ' text-white flex flex-wrap w-full items-start justify-between'>
        <div className='w-1/2' >
            <div >
                <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                <input 
                value={taskTitle}
                onChange={(e)=>setTaskTitle(e.target.value)}
                className='text-sm py-1 px-2 w-4/5 placeholder:text-gray-300 rounded outline-none bg-transparent border border-gray-400 mb-4' type="text" placeholder='Enter Your Task Title' />
            </div>
            <div>
                <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                <input id='date' 
                value={taskDate} 
                onChange={(e)=>setTaskDate(e.target.value)}
                 className='text-sm py-1 px-2 w-4/5 text-gray-300 rounded outline-none bg-transparent border border-gray-400 mb-4' type="date" />
            </div>
            <div>
                <h3 className='text-sm text-gray-300 mb-0.5'>Assign To</h3>
                <input
                 value={taskAssignTo} 
                 onChange={(e)=>setTaskAssignTo(e.target.value)} 
                 className='text-sm py-1 px-2 w-4/5 placeholder:text-gray-300 rounded outline-none bg-transparent border border-gray-400 mb-4' type="text" placeholder='Employee Name'/>
            </div>
            <div>
                <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                <input 
                value={taskCategory} 
                onChange={(e)=>setTaskCategory(e.target.value)}
                 className='text-sm py-1 px-2 w-4/5 placeholder:text-gray-300 rounded outline-none bg-transparent border border-gray-400 mb-4' type="text"placeholder='Enter Category Of Task' />
            </div>
        </div>

        <div className='w-2/5 flex flex-col items-start' >
            <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
            <textarea 
            value={taskDescription} 
            onChange={(e)=>setTaskDescription(e.target.value)} 
            className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border border-gray-300 mb-4' name="Description" id=""></textarea>
            <button className='bg-emerald-500 hover:bg-emerald-600 px-5 py-3 rounded text-sm mt-4 w-full'>Create Task</button>
        </div>
      </form>
    </div>
  )
}

export default CreateTask
