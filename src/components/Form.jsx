import React, { useState } from "react";
import style from './Form.module.css';
import { validation } from "./validation";

export default function Form ({login}) {
const [userData, setUserData] = useState({
    username: '',
    password: ''
})
const [errors, setErrors] = useState({
    username: '',
    password: ''
})


function handleSubmit () {
login(userData);
};

function handleInputChange (e) {
setUserData({...userData, [e.target.name]: e.target.value})

setErrors(validation({...userData, [e.target.name]: e.target.value}))
}
    return (

        <div className="container">
            <div className="row">
                <div className="col-md-4">
            <form className={style.form}>
                <label htmlFor="username">Username:</label>
                <input onChange={handleInputChange} id='username' placeholder="Ingrese su usuario" name='username' type='text'></input>
            <p style={{
                color: 'red',
                fontWeight: 'bold',
            }}>{errors.username}</p>
                <label htmlFor="password">Password:</label>
                <input onChange={handleInputChange} id='password' name='password' type='password'></input>
            <p style={{
                color: 'red',
                fontWeight: 'bold'
            }}>{errors.password}</p>
            <button onClick={handleSubmit}>Submit</button>
            </form>
            </div>
            </div>
        </div>
    )
}