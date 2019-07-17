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


  getInputs() {
    return document.querySelectorAll(".login__input")!; 
  }

  handleOnSubmit(event: FormEvent<HTMLFormElement> | FormEvent<HTMLButtonElement>) {
    this.validateInputs()
    event.preventDefault();
    // console.log(this.inputArray);
    // for (let input of this.inputArray) {
    //   console.log(input);
    //   console.log(input.props.type);
    // }
    // // TODO: send data to server
    // console.log("data sent to serever");
  };



  validateInputs() {
    const inputs = this.getInputs();
 //   console.log(inputs);
    for (const input of inputs) {
      let validatedInput = this.validateInput(input);
    }

  }

  validateInput(element:Element){
    console.log(element.attributes[2].value);
    if(element.nodeValue=""){
      return false;
    }

    // if(element.attributes[2].value !== "email"){
    //   var x = element.attributes[2].value;
    //   console.log(x + " is not email");
    // }
  }


  inputArray = [
    <Input
      className={"login__input email"}
      placeholder={"Your Email Adress"}
      type={"email"}

    ></Input>
    ,
    <Input
      className={"login__input password"}
      placeholder={"Your Password?"}
      type={"password"}

    ></Input>

  ]


  render() {
    return (
      <Fragment>
        <section className="login-form">
          <h1 className="login-form__header">Sign In to Your Account</h1>
          <hr className="login-form__hr"></hr>
          <p className="login-form__paragraph">How was your day?</p>
        </section>


        <form onSubmit={this.handleOnSubmit.bind(this)}>

          {this.inputArray.map(item=>item)}

          <p className="error-msg"></p>

          <LoginButton onSubmit={this.handleOnSubmit.bind(this)}></LoginButton>
        </form>
      </Fragment>
    );
  }
}


export default LoginForm;
