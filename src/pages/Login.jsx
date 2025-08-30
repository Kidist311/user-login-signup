import '../App.css';
import Input from "../components/Enput";
import React, { useState } from 'react';


function Login() {

  const [input, setInput] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  function handleChange(event) {
    const {name, value} = event.target;
    setInput(preValue => {
      if (name === "email") {
        return {
          ...preValue,
          email: value
        };
      } else if (name === "password") {
        return {
          ...preValue,
          password: value
        };
      } else if (name === "confirmPassword") {
        return {
          ...preValue,
          confirmPassword: value
        };
      }
    });
  }

  return (
    <div className="relative w-screen h-screen bg-gray-50">
     <div className="custom-shape-divider-top-1756480461 relative w-full">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1200 120"
    preserveAspectRatio="none"
    className="w-full h-48"
  >
    <defs>
      <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#34d399" />
        <stop offset="100%" stopColor="#10b981" />
      </linearGradient>
    </defs>

    {/* Layer 1 */}
    <path
      className="wave-path"
      d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
    />

    {/* Optional Layer 2 */}
    <path
      className="wave-path"
      style={{ animationDuration: '6s', fillOpacity: 0.5 }}
      d="M321.39,56.44c58-8,114.16-25,172-35,82.39-12,168.19-15,250.45-.39C823.78,35,906.67,65,985.66,85c70.05,12,146.53,20,214.34,5V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
    />
  </svg>
</div>

       {/* call Input as a component */}
       <Input input={input} handleChange={handleChange} />
       <div className="absolute bottom-0 w-full">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1200 120"
    preserveAspectRatio="none"
    className="w-full h-48 transform rotate-180"
  >
    <defs>
      <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#34d399" />
        <stop offset="100%" stopColor="#10b981" />
      </linearGradient>
    </defs>

    <path
      className="wave-path"
      d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
    />
  </svg>
</div>










       

{/* just to see if it works 
<p>Email: {input.email}</p>
<p>Password: {input.password}</p>
<p>Confirm Password: {input.confirmPassword}</p>
*/}    </div>
  );
}

export default Login;
