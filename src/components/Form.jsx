import React, { useState } from 'react'

const Form = () => {
    const [firstName, setFirstName] = useState("")
    // const [firstNameError, setFirstNameError] = useState("")
    const [lastName, setLastName] = useState("")
    // const [lastNameError, setLastNameError] = useState("")
    const [email, setEmail] = useState("")
    // const [emailError, setEmailError] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    // const [passError, setPassError] = useState("")
    // const handleFirstName = (e) => {
    //     setFirstName(e.target.value);
    //     if(e.target.value.length<2){
    //         setFirstNameError("Name must be at least 2 characters long");
    //     }
    // }
    // const handleLastName = (e) => {
    //     setLastName(e.target.value);
    //     if(e.target.value.length<2){
    //         setLastNameError("Name must be at least 2 characters long");
    //     }
    // }
    // const handleEmail = (e) => {
    //     setEmail(e.target.value);
    //     if(e.target.value.length<4){
    //         setEmailError("Email must be at least 5 characters long");
    //     }
    // }
    // const handlePassword = (e) =>{
    //     setPassword(e.target.value)
    //     if(password !== "undefined" && confirmPassword !== "undefined") {
    //         if(password != confirmPassword) {
    //             setPassError("Passwords don't match!");
    //         }
    //     }
    // }
    // const handleConfirmPassword = (e) =>{
    //     setConfirmPassword(e.target.value)
    //     if(password !== "undefined" && confirmPassword !== "undefined") {
    //         if(password != confirmPassword) {
    //             setPassError("Passwords don't match!");
    //         }
    //     }
    // }

    return (
        <form onSubmit={(e)=> e.preventDefault()}>
            <div>
                <p>
                    <label> First Name: </label>
                    <input type="text" name="firstName" onChange={e=>setFirstName(e.target.value)} value={firstName}/>
                </p>
                    {
                        firstName.length <2?
                        <span style={{color:"red"}}>Name must be at least 2 characters</span>:""
                    }
                <p>
                    <label> Last Name: </label>
                    <input type="text" name="lastName" onChange={e=>setLastName(e.target.value)} value={lastName}/>
                </p>
                    {
                        lastName.length<2 ?
                        <span style={{color:"red"}}>Name must be at least 2 characters</span>:""
                    }
                <p>
                    <label> Email: </label>
                    <input type="email" name="email" onChange={e=>setEmail(e.target.value)} value={email} />
                </p>
                    {
                        email.length<5 ?
                        <span style={{color:"red"}}>Email must be at least 5 characters</span>:""
                    }
                <p>
                    <label> Password: </label>
                    <input type="password" name="password" onChange={e=>setPassword(e.target.value)} value={password}/>
                </p>
                <p>
                    <label> Confirm Password: </label>
                    <input type="password" name="confirmPassword" onChange={e=>setConfirmPassword(e.target.value)} value={confirmPassword}/>
                </p>
                    {
                        password.length<8 ?
                        <span style={{color:"red"}}>Password must be at least 8 characters! </span>:""
                    }
                    {
                        password !== confirmPassword ?
                        <span style={{color:"red"}}>Passwords don't match!</span>:""
                    }
                <div>
                    <p>First Name: {firstName} </p>
                    <p>Last Name: {lastName} </p>
                    <p> Email: {email} </p>
                    <p> Password: {password} </p>
                </div>
            </div>
            <input type="submit" value="submit" />
        </form>
    )
}

export default Form