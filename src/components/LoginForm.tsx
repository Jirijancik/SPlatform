import React, { Fragment } from 'react';
import LoginButton from './LoginButton';
import '../css/LoginForm.css'

const LoginForm: React.FC = () => {
    return (
      <Fragment>
          <section className = "login-form">
            <h1 className="login-form__header">Sign In to Your Account</h1>
            <hr className="login-form__hr"></hr>
            <p className="login-form__paragraph">How was your day?</p>
          </section>
          <section>
            <input className="login__input" type="email" placeholder="Your Email Adress"></input>
            <br></br>
            <input className="login__input" type="password" placeholder="Your Password"></input>
            <br></br>
            <LoginButton></LoginButton>
          </section>
      </Fragment>
    );
}


export default LoginForm;
