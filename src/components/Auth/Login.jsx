import React, { useState } from 'react'

const Login = ({ loginHandler }) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const SubmitHandler = (e) => {
    e.preventDefault();
    loginHandler(email, password)
    setEmail('')
    setPassword('')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#2c2c2c]">

      <div className="bg-[#1f1f1f] p-10 rounded-2xl shadow-2xl w-100 border border-gray-700">

        <h1 className="text-3xl font-bold text-white text-center mb-2">
          Employee Management System
        </h1>
        <p className="text-gray-400 text-center mb-8">
          Login to continue
        </p>

        <form onSubmit={SubmitHandler} className="flex flex-col">

          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter your email"
            className="bg-[#2c2c2c] text-white border border-gray-600 rounded-lg py-3 px-4 mb-4 
                       focus:outline-none focus:ring-2 focus:ring-emerald-500 
                       placeholder-gray-500 transition"
            required
          />

          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Enter your password"
            className="bg-[#2c2c2c] text-white border border-gray-600 rounded-lg py-3 px-4 mb-6 
                       focus:outline-none focus:ring-2 focus:ring-emerald-500 
                       placeholder-gray-500 transition"
            required
          />

          <button
            type="submit"
            className="bg-emerald-600 text-white py-3 rounded-lg font-semibold 
                       hover:bg-emerald-700 transition duration-300 shadow-lg"
          >
            Login
          </button>

        </form>

      </div>

    </div>
  )
}

export default Login
