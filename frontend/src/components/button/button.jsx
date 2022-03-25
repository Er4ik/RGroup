import React from "react";

const Button = ({ 
    value, 
    type = "", 
    color = "", 
    icon = "", 
    width = "auto",
}) => {
    const colorsForButton = {
        gradient: {
            background: "bg-gradient-to-r from-red to-orange",
            text: "text-white" 
        },
        white: {
            background: "bg-white",
            text: "text-blue" 
        }
    }

    return (
        <button
        type={type}
        style={{width: width}} 
        className={
            `h-10 ${colorsForButton[color].background} ${colorsForButton[color].text} 
            filter drop-shadow-normal font-semibold text-m rounded-s
            flex items-center justify-center`
        }>
            {icon ? (
                <img className="w-4 h-4 mr-2 mt-px" src={icon} alt="icon"></img>
            ) : ""}
            {value}
        </button>
    )
}

export { Button }