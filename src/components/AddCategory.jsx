/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({target})=>{
        setInputValue(target.value)
    }

    const onSubmit = (event)=>{
        const inputV = inputValue.trim().toUpperCase();
        event.preventDefault(); //Evitar que se refresque el form en cada click
        if( inputV.length <=1 ) return;
       onNewCategory(inputV)
        setInputValue('');
    }

  return (
    <form onSubmit={onSubmit}>
        <input
            type="text"
            placeholder="Buscar imagen"
            value={inputValue}
            onChange={onInputChange}
        />
    </form>
  )
}
/*  */