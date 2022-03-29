import React from "react";
import { NavLink } from "react-router-dom";

const SupportText = ({ 
    mainText, 
    textLink, 
    navTo = "#", 
    handleClick = () => {},
}) => {
    return (
        <p className="text-blue text-s font-normal">{mainText}
            <NavLink className="text-red font-semibold ml-2" onClick={handleClick} to={`${navTo}`}>{textLink}</NavLink>
        </p>
    )
}

export { SupportText }