import "../styles/form.scss"
import { Link } from "react-router-dom"
import { useState } from "react"

const Login = () => {
      const [ username, setUsername ] = useState("")
    const [ password, setPassword ] = useState("")


    function handleSubmit(e) {
        e.preventDefault()

       
    }

  return (
    <main>
        <div className="form-container">
            <h1>Login Form</h1>
            <form onSubmit={handleSubmit}>
                <input
                value={username}
                onInput={(e) => { setUsername(e.target.value) }}
                type='text'
                placeholder='Enter Your username'/> 

                <input 
                value={password}
                onInput={(e)=>{setPassword(e.target.value)}}
                type='text'
                placeholder='Enter Your Password'/> 
                <button type='submit'>Login</button>
            </form>
            <p>Don't have an account? <Link className='toggleAuthForm' to="/register">Login</Link></p>
        </div>
    </main>
  )
}

export default Login