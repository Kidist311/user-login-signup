import '../App.css';
//import Input from "../components/Input";
//import React, { useState } from 'react';
function Input({ input, handleChange }){
    return(
        <div className="space-y-11">
            
            <h1 className="font-oswald text-4xl text-neutral-800">Wellcome!</h1>

            <form className="space-y-4">


            <input 
            type="email" 
            name="email"
             placeholder="Enter your email" 
             value={input.email} 
             onChange={handleChange}
             className="border-2 "
             /><br/>


            <input
             type="password" 
             name="password" 
             placeholder="enter ur password" 
             value={input.password} 
             onChange={handleChange} 
             className="border-2"
             /> <br/>


            </form>
        </div>
    );
}

export default Input;
