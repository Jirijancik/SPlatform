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
    const inputs: HTMLFormElement = document.querySelector("form")!;
    return inputs.children
  }

  handleOnSubmit(event: FormEvent<HTMLFormElement> | FormEvent<HTMLButtonElement>) {
    event.preventDefault();
    console.log(this.inputArray);
    for (let input of this.inputArray) {
      console.log(input);
    }
    // TODO: send data to server
    console.log("data sent to serever");
  };



  validateInputState(isValidState: boolean) {
    this.setState({ inputIsValid: isValidState });

  }

  inputArray = [
    <Input
      className={"login__input email"}
      placeholder={"Your Email Adress"}
      type={"email"}
      validityChange={this.validateInputState.bind(this)}
    ></Input>
    ,
    <Input
      className={"login__input password"}
      placeholder={"Your Password?"}
      type={"password"}
      validityChange={this.validateInputState.bind(this)}
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
