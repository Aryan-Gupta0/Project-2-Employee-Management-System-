import React from 'react'

const Header = (props) => {



const logOutUser = () => {
  localStorage.removeItem('loggedInUser')
  props.changeUser('')
}

  return (
    <div className='flex items-end justify-between  '>
      <h1 className='font-semibold text-2xl text-white'>Hello <br/> <span className='text-3xl font-bold'>{props.data?.firstName || "Admin"} 👋</span></h1>
      <button onClick={logOutUser} className='bg-red-600 text-white py-2 px-5 rounded-lg text-lg font-semibold'>Log Out</button>
      
    </div>
    
  )
}

export default Header
