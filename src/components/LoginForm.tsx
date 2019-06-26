import React, { Fragment, FormEvent } from 'react';
import LoginButton from './LoginButton';
import Input from './Input';
import '../css/LoginForm.css'

const getInputs = () => {
  let x = document.querySelector(".login__input.email") as HTMLInputElement;
  let y = document.querySelector(".login__input.password") as HTMLInputElement;
  return [x, y];
}

const handleOnSubmit = (event:FormEvent<HTMLFormElement> | FormEvent<HTMLButtonElement>) => {
  event.preventDefault();
  let x,y;
  [x,y] = getInputs();

  if(x!=null && y!=null){
    console.log("is Empty");
    console.log(x);
    console.log(y.value);
    validateImputs(x,y);
  }
};

const validateImputs = (x:HTMLInputElement, y:HTMLInputElement) => {
  if (x.value=="" && y.value=="") {
    console.log("proslo")
    x.classList.add("empty-required-fields");
    y.classList.add("empty-required-fields");
  }
}

const handleKeyPress = () =>{
  let x,y;
  [x,y] = getInputs();
  if(x!=null && y!=null){
    if (x.value!=="" && y.value!=="") {
      x.classList.remove("empty-required-fields");
      y.classList.remove("empty-required-fields");
    }
  }
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
            handleOnSubmit={handleOnSubmit}
            ></Input>

            <br></br>

            <Input 
            className={"login__input password"}
            placeholder={"Your Password?"}
            type={"password"}
            handleOnSubmit={handleOnSubmit}
            ></Input>

            <br></br>

            <p className="error-msg"></p>

            <LoginButton onSubmit={handleOnSubmit}></LoginButton>
          </form>
      </Fragment>
    );
}


export default LoginForm;
