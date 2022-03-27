import React from "react";
import { Button } from "../button/button";
import { SupportText } from "./supportText";

const SentForm = ({
    mainText, 
    secondText, 
    valueButton, 
    colorButton = "white", 
    navTo = "#",
    handleClick = () => {},
}) => {
    return (
        <div className="w-full h-full flex flex-col justify-around">
            <h3 className="text-blue font-bold text-label">{mainText}</h3>
            <p className="text-blue text-m font-medium">{secondText}</p>
            <Button value={valueButton} color={colorButton} navTo={navTo} />
            <SupportText mainText={"Don't receive the link?"} textLink={"Resend"} handleClick={handleClick} to={`${navTo}`} />
        </div>
    )
}

export { SentForm }