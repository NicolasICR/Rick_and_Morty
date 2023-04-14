import React from "react";
import { useState } from "react";
import Validation from "./Validation/Validation";

export default function Form() {
   const [errors, setErrors] = useState({});
   const [userData, setUserData] = useState({
    email: '',
    password: ''
   })
   
   const handleChange = (event) => {
    setUserData({
        ...userData,
        [event.target.name]: event.target.value
    })

        setErrors(Validation({
            ...userData,
            [event.target.name]: event.target.value
        }))
   }


   /*const handleSubmit = (event) =>{
    event.preventDefault()
    handleLogin(userData);
  }*/
   
   
    return(
    <form>
        <label htmlFor="email">Email: </label>
        <input type="text" name='email' value={userData.email} onChange={handleChange} required/>
        {errors.email && <p>{errors.email}</p>}
        <hr />
        <label htmlFor="password">Password: </label>
        <input type="password" name='password' value={userData.password
        } onChange={handleChange} required/>
        {errors.passwords && <p>{errors.password}</p>}

        <button type='submit'>Submit</button>
    </form>
    )
}