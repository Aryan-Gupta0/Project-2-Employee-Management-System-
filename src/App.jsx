import React, { use, useContext, useState } from 'react'
import { useEffect } from "react";
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboards/EmployeeDashboard'
import Header from './others/Header'
import AdminDashboard from './components/Dashboards/AdminDashboard'
import { GetLocalStorage, SetLocalStorage } from './utils/localStorage' 
import { AuthContext } from './context/AuthProvider';



const App = () => {

const [user, setUser] = useState(null)
const [loggedInUserData, setLoggedInUserData] = useState(null)
const [userData, setUserData] = useContext(AuthContext)

useEffect(() => {
  const loggedInUser = localStorage.getItem('loggedInUser')
  if (loggedInUser) {
    const userData = JSON.parse(loggedInUser)
    setUser(userData.role)
    setLoggedInUserData(userData.data)
  }
}, [])

const loginHandler = (email,password) => {
  if(email == 'admin@me.com' && password == '123'){
    setUser('admin')
    localStorage.setItem('loggedInUser',JSON.stringify({role : 'admin'  }))
}else if(userData){
  const employee = userData.find(emp => emp.email === email && emp.password === password)
  if(employee){
  setUser('employee')
  setLoggedInUserData(employee)
  localStorage.setItem('loggedInUser',JSON.stringify({role : 'employee',data : employee }))
}else{
  alert('Invalid credentials')
}
}
}

  return (
    <>
    
     {!user ? (
      <Login loginHandler={loginHandler} />
    ) : user === "admin" ? (
      <AdminDashboard changeUser={setUser} />
    ) : (
      user === "employee" ? <EmployeeDashboard changeUser={setUser} data={loggedInUserData} />:null
    )}
   
    </>
  )
}


export default App
