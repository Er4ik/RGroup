import React from "react";

const Input = ({ name, value, placeholder, width, onChange, error }) => {
    return (
        <div className="w-full h-auto">
            <input 
            name={name}
            value={value}
            style={{width: width ? width : "100%"}} 
            className={`h-10 p-5 ${error ? "border-red border-2" : ""} outline-none text-blue filter shadow-inner2 font-normal text-m rounded-s`} 
            placeholder={placeholder}
            onChange={onChange}>
            </input>
            {error ? <p className="text-error text-red">{error}</p> : ""}
        </div>
    )
}

export { Input }