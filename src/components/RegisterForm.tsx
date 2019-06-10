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
                    <section className= "register-table__header-section">
                    <h1 className="login-form__header">Register Your Account</h1>
                    <hr className="login-form__hr"></hr>
                    </section>
                    

                    <input className="register__input register__input--name" type="text" name='Name' placeholder="User Name"></input>
                    <input className="register__input register__input--surename" type="text" placeholder="Surename"></input>

                    <br></br>

                    <input className="register__input" type="email" placeholder="Email Adress"></input>

                    <br></br>

                    <input className="register__input" type="password" placeholder="Password"></input>

                    <br></br>

                    <input className="register__input" type="password" placeholder="Password Verification"></input>
                 
                    <button className='register__button--sign-up'>SING UP</button>
                    <button className='register__button--back' onClick={this._onClick.bind(this)}>BACK</button>
               </section>
            </Fragment>
          );
    }
}


export default RegisterForm;
