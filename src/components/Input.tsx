import React, { Fragment, FormEvent } from 'react';
import '../css/Input.css'


interface IProps {
  value?: string;
  className: string;      //TODO: Možná udělat něaký Enum kde budou typy inputu a podle toho si to samo dá předdefinovaný className??
  name?:string;
  placeholder:string;     
  type: string;
  validityChange: (isValidState: boolean) => void
}

interface IState{
  isValid:boolean;
}

class Input extends React.Component<IProps,IState> {


  constructor(props: IProps) {
    super(props);

    this.state = {
      isValid: true
    };
  }

  public get IsValid(){
    return this.state.isValid;
  }

  validateInput(input:HTMLInputElement){
    if (input.value=="" || !input.validity.valid) {
 
      input.classList.add("empty-required-fields");
      this.setState({isValid:false});
    }
    else{

      this.setState({isValid:true});
      input.classList.remove("empty-required-fields");
    }
  }

  handleOnBlur(event:React.FocusEvent<HTMLInputElement>){

    if(!event){

      return
    }
 
    this.validateInput(event.target as HTMLInputElement);
    
  }
  

  componentDidUpdate(prevProps:IProps, prevState:IState) {
    if (this.state.isValid !== prevState.isValid) {
      this.props.validityChange(this.state.isValid);
    }
  }
  
  render() {
    this.props.validityChange(this.state.isValid);
      return (

        <Fragment>
          <input 
          onBlur={e=>this.handleOnBlur(e)}
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
