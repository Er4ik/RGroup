import React from "react";
import { NavLink } from "react-router-dom";

const SupportText = ({ mainText, textLink }) => {
    return (
        <p className="text-blue text-m font-semibold">{mainText}
            <NavLink className="text-red ml-2" to={"/sign-up"}>{textLink}</NavLink>
        </p>
    )
}

export { SupportText }