import '../App.css';
//import Input from "../components/Input";
//import React, { useState } from 'react';
function Input({ input, handleChange }){
    return(
        <div className=" -mt-16 flex flex-col items-center">
        <h1 className="font-oswald text-4xl mb-10 text-neutral-800">Welcome!</h1>
    
        {/* Email input */}
        <div className="relative w-[320px] mb-7">
            <input 
                type="email" 
                name="email"
                value={input.email} 
                onChange={handleChange}
                placeholder=" "
                className="peer w-full h-[40px] text-[16px] text-black px-[10px] pt-[12px] pb-[4px] bg-transparent border-[1.2px] border-black outline-none rounded-[5px]"
            />
             <label className={`
      absolute left-[10px] top-[50%] -translate-y-1/2 text-gray-500 text-[16px]
      peer-placeholder-shown:top-[50%] peer-placeholder-shown:text-[16px] peer-placeholder-shown:text-gray-500
      peer-focus:top-0 peer-focus:text-[12px] peer-focus:text-black
      transition-all bg-gray-50 px-1
      ${input.email ? "top-0 text-[12px] text-black" : ""}
  `}>
      Email
  </label>
        </div>
    
        {/* Password input */}
        <div className="relative w-[320px]">
            <input
                type="password" 
                name="password" 
                value={input.password} 
                onChange={handleChange} 
                placeholder=" "
                className="peer w-full h-[40px] text-[16px] text-black px-[10px] pt-[12px] pb-[4px] bg-transparent border-[1.2px] border-black outline-none rounded-[5px]"
            /> 
             <label className={`
      absolute left-[10px] top-[50%] -translate-y-1/2 text-gray-500 text-[16px]
      peer-placeholder-shown:top-[50%] peer-placeholder-shown:text-[16px] peer-placeholder-shown:text-gray-500
      peer-focus:top-0 peer-focus:text-[12px] peer-focus:text-black
      transition-all bg-gray-50 px-1
      ${input.password ? "top-0 text-[12px] text-black" : ""}
  `}>
      Password
  </label>
        </div>
        <p className="mt-0 ml-40 text-gray-600">Forget password?</p>
        <button className='border-2 rounded-[5px] mt-5'>submit</button>
        <p className='mt-5'>or Sign Up Using</p>

        <button className='mt-5 flex flex-row gap-3'>
            <div className='rounded-full '>
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 48 48">
<path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
</svg>
</div>

<div className='rounded-full'>
<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 48 48">
<path fill="#039be5" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"></path><path fill="#fff" d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"></path>
</svg>
</div>

<div className='rounded-full'>
<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 48 48">
<path fill="#212121" fill-rule="evenodd" d="M38,42H10c-2.209,0-4-1.791-4-4V10c0-2.209,1.791-4,4-4h28	c2.209,0,4,1.791,4,4v28C42,40.209,40.209,42,38,42z" clip-rule="evenodd"></path><path fill="#fff" d="M34.257,34h-6.437L13.829,14h6.437L34.257,34z M28.587,32.304h2.563L19.499,15.696h-2.563 L28.587,32.304z"></path><polygon fill="#fff" points="15.866,34 23.069,25.656 22.127,24.407 13.823,34"></polygon><polygon fill="#fff" points="24.45,21.721 25.355,23.01 33.136,14 31.136,14"></polygon>
</svg>
</div>
</button>
    </div>
    
    );
}

export default Input;
