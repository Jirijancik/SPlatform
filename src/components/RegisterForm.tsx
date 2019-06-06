import React, { Fragment } from 'react';
import '../css/RegisterForm.css';


class RegisterForm extends React.Component {

//    constructor(){
//        super();
//        this.state = {
           
//        }
//    }

    componentDidMount(){
        const inputArray = () => Array.from(document.body.querySelectorAll("input"));

        const onFocusChange = () =>{
            const arr = inputArray();
            console.log(arr);
            for(const inputItem of arr){
                const tempPlaceholder = inputItem.placeholder;

                inputItem.addEventListener("mouseenter", ()=> { 
                inputItem.placeholder="";})

                inputItem.addEventListener("mouseleave", ()=> { 
                inputItem.placeholder=tempPlaceholder;})
             };
        };

        onFocusChange();
    }



    

 
    render(){
        return (
        
            <Fragment>
                <input className="xx" type="text" placeholder="User Name"></input>
                <input className="xx" type="text" placeholder="Email"></input>
                <input className="xx" type="text" placeholder="Password"></input>
                <input className="xx" type="text" placeholder="Password Verification"></input>
                {console.log("is somebody here? ")}
               
            </Fragment>
          );
    }
}


export default RegisterForm;
