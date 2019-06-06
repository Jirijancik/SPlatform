import React, { Fragment } from 'react';
import LoginButton from './LoginButton';
import '../css/LoginForm.css'

const LoginForm: React.FC = () => {
    return (
      <Fragment>
          <section className = "login-form">
            <h1 className="login-form__header">Sign In to Your Account</h1>
            <p>How was your day?</p>
          </section>
          <section>
            <input type="email" placeholder="Your Email Adress"></input>
            <LoginButton></LoginButton>
          </section>
      </Fragment>
    );
}


export default LoginForm;
