import React, { Fragment } from 'react';
import LoginButton from './LoginButton';
import RegisterButton from './RegisterButton';

const LoginForm: React.FC = () => {
    return (
      <Fragment>
        <LoginButton></LoginButton>
        <RegisterButton></RegisterButton>
      </Fragment>
    );
}


export default LoginForm;
