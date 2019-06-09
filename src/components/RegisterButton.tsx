import React from 'react';
import '../css/RegisterButton.css'



interface IRegisterButtonProps {
  showRegisterTable: (input:boolean)=>void;
}


const RegisterButton: React.FC<IRegisterButtonProps> = (props) => {


  function _onClick(){
    props.showRegisterTable(true);
  }

    return (
      <button className= "button button__sign-in" onClick= {() => _onClick()}>SIGN IN</button>
    );
}


export default RegisterButton;
