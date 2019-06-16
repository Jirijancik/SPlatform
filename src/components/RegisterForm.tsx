import React, { Fragment, FormEvent } from 'react';
import '../css/RegisterForm.css';
import '../css/LoginTable.css';


interface IRegisterFormProps {
    showRegisterTable: (input: boolean) => void;
}
interface IRegisterFormState {
    firstname?: string;
    surname?: string;
    email?: string;
    password?: string;
}


class RegisterForm extends React.Component<IRegisterFormProps, IRegisterFormState> {

    constructor(props: IRegisterFormProps) {
        super(props)
        props = this.props;
        console.log(props);
        this.state = {
            firstname: "john",
            surname: "doe",
            email: "jDoe@yahoo.com",
            password: "sexymeda",
        }
    }

    componentDidMount() {

        const inputArray = () => Array.from(document.body.querySelectorAll("input"));

        const onFocusChange = () => {
            const arr = inputArray();

            for (const inputItem of arr) {
                const tempPlaceholder = inputItem.placeholder;

                inputItem.addEventListener("mouseenter", () => {
                    inputItem.placeholder = "";
                })

                inputItem.addEventListener("mouseleave", () => {
                    inputItem.placeholder = tempPlaceholder;
                })
            };
        };

        onFocusChange();
    }


    handleOnSubmit(event:FormEvent<HTMLFormElement>) {
        event.preventDefault();
        console.log("step one");
        //ziskat data
        this.sendDataToDB();

    }


    async sendDataToDB() {


        try{
        const result = await fetch('http://localhost:3001/api/users/register', {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Access-Control-Allow-Origin':'*',
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        })
        console.log(result);
          }
        catch (e) {
            console.log(e);
        }
        
    }


    _onClick() {
        this.props.showRegisterTable(false);

    }


    render() {
        return (


            <Fragment>
                <form onSubmit={this.handleOnSubmit.bind(this)} className="register-table">
                    <section className="register-table__header-section">
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
                </form>
            </Fragment>
        );
    }
}


export default RegisterForm;
