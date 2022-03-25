import React from "react";

const Input = ({ name, placeholder, width, onChange }) => {
    return (
        <input 
        name={name}
        style={{width: width}} 
        className={`h-10 p-5 filter shadow-inner2 font-semibold text-m rounded-s`} 
        placeholder={placeholder}
        onChange={onChange}>
        </input>
    )
}

export { Input }