import React, { Fragment } from 'react';



const RegisterForm: React.FC = () => {


    const inputArray = Array.from(document.body.querySelectorAll("input"));

    const onFocusChange = () =>{
        inputArray.forEach(inputItem => {
            inputItem.addEventListener("mouseenter", ()=> inputItem.nodeValue="")
        });
    };

    //TODO : https://www.pluralsight.com/guides/typescript-pass-function-react

    return (
        
      <Fragment>
          <input type="text" value="User Name"></input>
          <input type="text" value="Email"></input>
          <input type="text" value="Password"></input>
          <input type="text" value="Password Verification"></input>
      </Fragment>
    );
}


export default RegisterForm;
