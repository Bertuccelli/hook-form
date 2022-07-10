import React, { useState } from 'react'

const Form = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const handlePassword = (e) =>{
        setPassword(e.target.value)
    }

    return (
        <div>
            <p>
                <label> First Name: </label>
                <input type="text" name="firstName" onChange={e=>setFirstName(e.target.value)} value={firstName}/>
            </p>
            <p>
                <label> Last Name: </label>
                <input type="text" name="lastName" onChange={e=>setLastName(e.target.value)} value={lastName}/>
            </p>
            <p>
                <label> Email: </label>
                <input type="email" name="email" onChange={e=>setEmail(e.target.value)} value={email} />
            </p>
            <p>
                <label> Password: </label>
                <input type="password" name="password" onChange={handlePassword} value={password}/>
            </p>
            <div>
                <p>First Name: {firstName} </p>
                <p>Last Name: {lastName} </p>
                <p> Email: {email} </p>
                <p> Password: {password} </p>
            </div>
        </div>
    )
}

export default Form