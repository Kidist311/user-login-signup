import '../App.css';
//import Input from "../components/Input";
//import React, { useState } from 'react';
function Input({ input, handleChange }){
    return(
        <div>

            <label htmlFor="email" className="">
                Email:
            </label>
            <input 
            type="email" 
            name="email"
             placeholder="Enter your email" 
             value={input.email} 
             onChange={handleChange}
             /><br/>

            <label htmlFor="password" className="">
                Password:
            </label>
            <input
             type="password" 
             name="password" 
             placeholder="enter ur password" 
             value={input.password} 
             onChange={handleChange} 
             /> <br/>

            <label htmlFor="confirmPassword" className="">
                ConfirmPassword:
            </label>
            <input 
            type="text" 
            name="confirmPassword" 
            placeholder="confirm" 
            value={input.confirmPassword} 
            onChange={handleChange}
            />
        </div>
    );
}

export default Input;
