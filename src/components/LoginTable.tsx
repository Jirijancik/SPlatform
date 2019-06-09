import React, { Fragment } from 'react';
import LoginForm from './LoginForm';
import RegisterButton from './RegisterButton';
import '../css/LoginTable.css'
import RegisterForm from './RegisterForm';


interface IState {
  registerTableShown?: boolean;
}



class LoginTable extends React.Component<{}, IState> {


  constructor(props: any) {
    super(props);

    this.state = {
      registerTableShown: false
    };
  }


  registerTableShow = (input: boolean) => {
    this.setState({
      registerTableShown: input
    })
  }


  render() {
    if (!this.state.registerTableShown) {
      return (

        <Fragment>
          <div className="login-table">
            <LoginForm></LoginForm>
            <RegisterButton showRegisterTable={this.registerTableShow}></RegisterButton>
          </div>
        </Fragment>
      )
    }
    else {
      return (
        <RegisterForm showRegisterTable={this.registerTableShow}></RegisterForm>
      )
    }

  }

}


export default LoginTable;
