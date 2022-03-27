import React from "react";
import { NavLink } from "react-router-dom";

const SupportText = ({ 
    mainText, 
    textLink, 
    navTo = "#", 
    handleClick = () => {},
}) => {
    return (
        <p className="text-blue text-m font-semibold">{mainText}
            <NavLink className="text-red ml-2" onClick={handleClick} to={`${navTo}`}>{textLink}</NavLink>
        </p>
    )
}

export { SupportText }