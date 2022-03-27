import React from "react";
import { NavLink } from "react-router-dom";

const Button = ({ 
    value, 
    color = "", 
    icon = "", 
    width = "auto",
    handleClick = () => {},
    navTo = "#",
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
        style={{width: width}} 
        onClick={handleClick}
        className={
            `h-10 ${colorsForButton[color].background} ${colorsForButton[color].text} 
            filter drop-shadow-normal font-semibold text-m rounded-s
            flex items-center justify-center`
        }>
            {icon ? (
                <img className="w-4 h-4 mr-2 mt-px" src={icon} alt="icon"></img>
            ) : ""}
            <NavLink to={`${navTo}`}>{value}</NavLink>
        </button>
    )
}

export { Button }