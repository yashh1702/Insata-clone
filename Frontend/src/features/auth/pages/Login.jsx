import "../styles/form.scss"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import { useAuth } from '../hooks/useAuth.js'

const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    const { handleLogin , loading } = useAuth()

    if (loading) {
        return (
            <h1>Loading.....</h1>
        )
    }

    async function  handleSubmit(e) {
        e.preventDefault()

        await handleLogin(username, password).then(res => console.log(res))
        navigate("/")
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
                        placeholder='Enter Your username' />

                    <input
                        value={password}
                        onInput={(e) => { setPassword(e.target.value) }}
                        type='text'
                        placeholder='Enter Your Password' />
                    <button type='submit'>Login</button>
                </form>
                <p>Don't have an account? <Link className='toggleAuthForm' to="/register">Login</Link></p>
            </div>
        </main>
    )
}

export default Login