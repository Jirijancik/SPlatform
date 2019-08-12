import React, { Fragment, FormEvent } from 'react';
import '../css/Input.css'


interface IProps {
  value?: any;
  name:string;
  placeholder:string;     
  type: string;
  isValid?: boolean;
  onChange?:(value:any, name:string)=>void;
}



const Input: React.FC<IProps> = ({value, name, placeholder, type, isValid=true, onChange }) => {
  


  const handleOnChange = (e:any)=>{
    if(onChange)
      onChange(e.target.value, name)
  }

      return (


        <Fragment>
          <input 
          value={value}
          placeholder={placeholder}
          type={type}
          onChange={e=>handleOnChange(e)}
          name={name}
          className={isValid?"register__input register__input":"register__input register__input register_input--not-valid"}
          >
          </input>
          {console.log(isValid)}
        </Fragment>
      )
}


export default Input;
