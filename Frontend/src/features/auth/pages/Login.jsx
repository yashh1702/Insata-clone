import "../styles/form.scss"
import { Link } from "react-router-dom"

const Login = () => {
  return (
    <main>
        <div className="form-container">
            <h1>Login Form</h1>
            <form>
                <input type='text' name='email' placeholder='Enter Your Email'/> 
                <input type='text' name='password' placeholder='Enter Your Password'/> 
                <button type='submit'>Login</button>
            </form>
            <p>Don't have an account? <Link className='toggleAuthForm' to="/register">Login</Link></p>
        </div>
    </main>
  )
}

export default Login