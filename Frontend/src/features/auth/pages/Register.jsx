import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth.js'


const Register = () => {

  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()
  const { loading, handleRegister } = useAuth()

  if (loading) {
    return (
      <h1>Loading.....</h1>
    )
  }

  async function handleSubmit(e) {
    e.preventDefault()
    await handleRegister(username,email,password)
    navigate("/")
  }

  return (
    <main>
      <div className="form-container">
        <h1>Register</h1>
        <form onSubmit={handleSubmit} >
          <input
            onInput={(e) => { setUsername(e.target.value) }}
            type="text"
            value={username}
            placeholder='Enter username' />
          <input
            onInput={(e) => { setEmail(e.target.value) }}
            type="text"
            value={email}
            placeholder='Enter email' />
          <input
            onInput={(e) => { setPassword(e.target.value) }}
            type="password"
            value={password}
            placeholder='Enter password' />
          <button>Register</button>
        </form>

        <p>Already have an account? <Link className='toggleAuthForm' to="/login">Login</Link></p>
      </div>
    </main>
  )
}

export default Register