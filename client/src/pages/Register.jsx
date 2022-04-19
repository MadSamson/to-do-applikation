import { useNavigate } from 'react-router-dom'
import React, { useState } from 'react'


export default function Register() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    function handleOnSubmit(e){
        e.preventDefault()
        const registerPath = 'http://localhost:4000/register'
        const payload = {username,password}
        
        fetch(registerPath, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(payload)
        })
        .then(res => res.json())
        .then(data => console.log(data))
        navigate('/')    
    }


  return (
    <div>
        <h1>Register</h1>
        <form onSubmit={handleOnSubmit}>
            <label htmlFor="username">Username</label>
            <input type="text" id='username' value={username} onChange={e => setUsername(e.target.value)}/>
            <br />
            <label htmlFor="password">Password</label>
            <input type="password" id='password' value={password} onChange={e => setPassword(e.target.value)}/>
            <br />
            <input type="submit" value='Create'/>
        </form>
    </div>
  )
}
