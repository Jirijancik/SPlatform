import React, { Fragment, FormEvent } from 'react';
import LoginButton from './LoginButton';
import Input from './Input';
import '../css/LoginForm.css'

const getInputs = () => {
  const form:Input = document.querySelector("form")!;
  let inputs:Array<Input> = [];
  for(let input of form){
    inputs.push(input)
  }
  return inputs;
}

const handleOnSubmit = (event:FormEvent<HTMLFormElement> | FormEvent<HTMLButtonElement> | HTMLInputElement) => {
  
  if (!(event instanceof HTMLInputElement)) {
    event.preventDefault();
    // Do Stuff
  }
  const inputs = getInputs();
  for(let input in inputs){
    input.validateImputs();
  }
  // TODO: send data to server
  console.log("data sent to serever");
};



const validateInput = (validationFunction:Function) =>{
  const validState = validationFunction;
 if(validState){
   return true
 }
 return false;
}


const LoginForm: React.FC = () => {
    return (
      <Fragment>
          <section className = "login-form">
            <h1 className="login-form__header">Sign In to Your Account</h1>
            <hr className="login-form__hr"></hr>
            <p className="login-form__paragraph">How was your day?</p>
          </section>

          
          <form onSubmit={handleOnSubmit}>
            <Input 
            className={"login__input email"}
            placeholder={"Your Email Adress"}
            type={"email"}
            handleOnSubmit={validateInput}
            ></Input>

            <br></br>

            <Input 
            className={"login__input password"}
            placeholder={"Your Password?"}
            type={"password"}
            handleOnSubmit={validateInput}
            ></Input>

            <br></br>

            <p className="error-msg"></p>

            <LoginButton onSubmit={handleOnSubmit}></LoginButton>
          </form>
      </Fragment>
    );
}


export default LoginForm;
