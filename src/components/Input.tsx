import React, { Fragment, FormEvent } from 'react';
import '../css/Input.css'


interface IProps {
  value?: string;
  className: string;      //TODO: Možná udělat něaký Enum kde budou typy inputu a podle toho si to samo dá předdefinovaný className??
  name?:string;
  placeholder:string;     //TODO: Možná udělat něaký Enum kde budou typy inputu a podle toho si to samo dá předdefinovaný PALCEHOLDER??
  type: string;
  handleOnSubmit:(event: FormEvent<HTMLFormElement> | FormEvent<HTMLButtonElement>) => void;
}



class Input extends React.Component<IProps> {


  constructor(props: any) {
    super(props);

    this.state = {
      registerTableShown: false
    };
  }



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
