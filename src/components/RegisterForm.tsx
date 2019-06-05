import React, { Fragment } from 'react';



class RegisterForm extends React.Component {

   constructor(props){
       super(props);
       this.state = {
           
       }
   }

    componentDidMount(){
        const inputArray = () => Array.from(document.body.querySelectorAll("input"));

        const onFocusChange = () =>{
            const arr = inputArray();
            console.log(arr);
            for(const inputItem of arr){
                inputItem.addEventListener("click", ()=> { 
                inputItem.placeholder="";}
            )};
        };

        onFocusChange();
    }



    

 
    render(){
        return (
        
            <Fragment>
                <input type="text" placeholder="User Name"></input>
                <input type="text" placeholder="Email"></input>
                <input type="text" placeholder="Password"></input>
                <input type="text" placeholder="Password Verification"></input>
                {console.log("is somebody here? ")}
               
            </Fragment>
          );
    }
}


export default RegisterForm;
