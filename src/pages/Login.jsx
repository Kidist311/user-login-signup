import '../App.css';
import Input from "../components/Input";
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
    <div>
       {/* call Input as a component */}
       <Input input={input} handleChange={handleChange} />

{/* just to see if it works 
<p>Email: {input.email}</p>
<p>Password: {input.password}</p>
<p>Confirm Password: {input.confirmPassword}</p>
*/}    </div>
  );
}

export default Login;
