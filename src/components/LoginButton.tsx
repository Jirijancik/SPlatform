import React from 'react';
import '../css/LoginButton.css'

const LoginButton: React.FC = () => {
  const login = async () => {
    const data = await fetch("http://localhost:3001/api/greeting");
    console.log(data);
  }
    return (
      <button className= "button button__login" onClick={() => login() }>LOGIN</button>
    );
}


export default LoginButton;
