import React, { FormEvent } from 'react';
import '../css/LoginButton.css'
import { Function, tsPropertySignature } from '@babel/types';


interface IProps {
  onSubmit?:(event: FormEvent<HTMLButtonElement>)=>void;
}

const LoginButton: React.FC<IProps> = (props) => {
    return (
      <button onSubmit={props.onSubmit} className= "button button__login">LOGIN</button>
    );
}


export default LoginButton;
