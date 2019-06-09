import React, { Fragment } from 'react';
import '../css/RegisterForm.css';
import '../css/LoginTable.css';


interface IRegisterFormProps {
    showRegisterTable: (input:boolean)=>void;
  }

class RegisterForm extends React.Component<IRegisterFormProps> {
    
    constructor(props: IRegisterFormProps) {
        super(props)
        props = this.props;
        console.log(props);
    }

    componentDidMount(){

        

        const inputArray = () => Array.from(document.body.querySelectorAll("input"));

        const onFocusChange = () =>{
            const arr = inputArray();
           
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


    _onClick(){
        this.props.showRegisterTable(false);
        
    }

 
    render(){
        return (
         
        
            <Fragment>
                <section className = "register-table">
                    
                    <h6>Name</h6>
                    <br></br>
                    <input className="xx" type="text" name='Name' placeholder="User Name"></input>

                    <h6>Email</h6>
                    <br></br>
                    <input className="xx" type="text" placeholder="Email"></input>

                    <h6>Password</h6>
                    <br></br>
                    <input className="xx" type="text" placeholder="Password"></input>

                    <h6>Password</h6>
                    <br></br>
                    <input className="xx" type="text" placeholder="Password Verification"></input>
                 
                    <button className='button'>SING UP</button>
                    <button className='button' onClick={this._onClick.bind(this)}>LOG IN</button>
               </section>
            </Fragment>
          );
    }
}


export default RegisterForm;
