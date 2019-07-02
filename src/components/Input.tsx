import React, { Fragment, FormEvent } from 'react';
import '../css/Input.css'


interface IProps {
  value?: string;
  className: string;      //TODO: Možná udělat něaký Enum kde budou typy inputu a podle toho si to samo dá předdefinovaný className??
  name?:string;
  placeholder:string;     
  type: string;
  handleOnSubmit: (isValidState: boolean) => boolean
}

interface IState{
  isValid:boolean;
}

class Input extends React.Component<IProps,IState> {


  constructor(props: any) {
    super(props as any);

    this.state = {
      isValid: true
    };
  }

  validateImputs = (input:HTMLInputElement) => {
    if (input.value=="") {
      console.log("NEproslo")
      console.log(input.value)
      input.classList.add("empty-required-fields");
      this.setState({isValid:false});
      return this.state.isValid;
    }
    else{
      console.log(input.value)
      console.log("proslo")
      this.setState({isValid:true});
      input.classList.remove("empty-required-fields");
      return this.state.isValid;
    }
  }

  handleOnSubmit(this.state.isValid);
  
  render() {
    
      return (

        <Fragment>
          <input 
          className={this.props.className}
          placeholder={this.props.placeholder}
          type={this.props.type}
          
          >
          </input>
        </Fragment>
      )
  }

}


export default Input;
