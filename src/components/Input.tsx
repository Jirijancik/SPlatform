import React, { Fragment, FormEvent } from 'react';
import '../css/Input.css'


interface IProps {
  value?: string;
  className: string;      //TODO: Možná udělat něaký Enum kde budou typy inputu a podle toho si to samo dá předdefinovaný className??
  name?:string;
  placeholder:string;     
  type: string;
  handleOnSubmit:(event: FormEvent<HTMLFormElement> | FormEvent<HTMLButtonElement> | HTMLInputElement) => void;
}

interface IState{
  isValid:boolean;
}

class Input extends React.Component<IProps,IState> {


  constructor(props: any) {
    super(props);

    this.state = {
      isValid: true
    };
  }

  validateImputs = (input:HTMLInputElement) => {
    if (input.value=="") {
      console.log("NEproslo")
      console.log(input.value)
      input.classList.add("empty-required-fields");
      input.classList.add("empty-required-fields");
      this.setState({isValid:false});
    }
    else{
      console.log(input.value)
      console.log("proslo")
      this.setState({isValid:true});
    }
  }

  xhandleOnSubmit = (input:HTMLInputElement) =>{
    console.log("validanting inputs")
    this.validateImputs(input);
    console.log("validated")
    if(this.state.isValid)
    this.props.handleOnSubmit(input);
  }

  render() {

      return (

        <Fragment>
          <input 
          className={this.props.className}
          placeholder={this.props.placeholder}
          type={this.props.type}
          onSubmit={(e) => this.xhandleOnSubmit(e.currentTarget)}
          >
          </input>
        </Fragment>
      )
  }

}


export default Input;
