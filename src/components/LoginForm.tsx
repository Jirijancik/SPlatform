import React, { Fragment, FormEvent } from 'react';
import LoginButton from './LoginButton';
import Input from './Input';
import '../css/LoginForm.css'



interface IState {
  inputIsValid: boolean;
}

class LoginForm extends React.Component<{}, IState>{

  constructor(props: any) {
    super(props);

    this.state = {
      inputIsValid: true
    };
  }


  values:Map<string,{value:any, isValid:boolean}> = new Map;

  handleOnSubmit(event: FormEvent<HTMLFormElement> | FormEvent<HTMLButtonElement>) {
    event.preventDefault();

  };


  getIsValid(name:string, defaultIsValid:boolean=true){
    const _name = this.values.get(name);
    if(_name){
      return _name.isValid;
    }
    return defaultIsValid;
  }

  onChange=(value:any, name:string)=>{
    const isValid = this.validateInput(value, name);
    this.setState({inputIsValid:isValid});
    this.values.set(name, {value, isValid});
  }


  validateInput(value:any, name:string){
    if(value==="" || !value){
      return false;
    }
    return true;
  }


  render() {
    return (
      <Fragment>
        <section className="login-form">
          <h1 className="login-form__header">Sign In to Your Account</h1>
          <hr className="login-form__hr"></hr>
          <p className="login-form__paragraph">How was your day?</p>
        </section>


        <form onSubmit={this.handleOnSubmit.bind(this)}>

        <Input
          name="email"
          placeholder="Your Email Adress"
          type="email"
          onChange={this.onChange}
          isValid={this.state.inputIsValid?true:this.getIsValid("email")}
        ></Input>
        
        <Input
          name="password"
          placeholder="Your Password?"
          type="password"
          onChange={this.onChange}
          isValid={this.state.inputIsValid?true:this.getIsValid("password")}
        ></Input>

          <p className="error-msg"></p>

          <LoginButton onSubmit={this.handleOnSubmit.bind(this)}></LoginButton>
        </form>
      </Fragment>
    );
  }
}


export default LoginForm;
