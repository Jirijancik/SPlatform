import React, { Fragment } from 'react';
import './App.css';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';

const App: React.FC = () => {
  return (
    <Fragment>
    <LoginForm></LoginForm>
    <RegisterForm></RegisterForm>
    </Fragment>
  );
}

export default App;
