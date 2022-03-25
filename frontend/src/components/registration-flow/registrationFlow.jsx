import React from "react";
import "../../assets/styles/registration.scss";

const RegistrationFlow = ({ form, text, shape }) => {
    return (
        <div className="w-full h-full bg-white">
            <div className={`shape ${shape} z-10`}></div>
            <div className="shape circle z-10"></div>
            <div className="flex relative rounded-l-xxl mx-auto my-32 z-20 w-4/6 h-5/6 filter drop-shadow-normal">
                <div className="flex items-center justify-center h-full w-3/5 rounded-l-xxl bg-gradient-to-r from-red to-orange">
                    <h1 className="text-white text-6xl font-bold text-center">{text}</h1>
                </div>
                <div className="h-full w-2/5 bg-white flex items-center justify-center">
                    {form}
                </div>
            </div>
        </div>
    )
}

export { RegistrationFlow }