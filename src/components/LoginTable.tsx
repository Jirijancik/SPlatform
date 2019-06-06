import React, { Fragment } from 'react';
import LoginForm from './LoginForm';
import RegisterButton from './RegisterButton';
import '../css/LoginTable.css'

const LoginTable: React.FC = () => {
    return (
      <Fragment>
        <div className="login-table">
          <LoginForm></LoginForm>
          <RegisterButton></RegisterButton>
        </div>
      </Fragment>
    );
}


export default LoginTable;
