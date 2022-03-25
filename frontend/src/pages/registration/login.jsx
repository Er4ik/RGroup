import React from "react";
import { LoginForm } from "../../components/registrationForm/loginForm";
import "../../assets/styles/registration.scss";

const Login = () => {
    return (
        <div className="w-full h-full bg-white">
            <div className="shape circle-right-shape z-10"></div>
            <div className="shape circle-left-shape z-10"></div>
            <div className="flex relative rounded-l-xxl mx-auto my-32 z-20 w-4/6 h-5/6 filter drop-shadow-normal">
                <div className="flex items-center justify-center h-full w-3/5 rounded-l-xxl bg-gradient-to-r from-red to-orange">
                    <h1 className="text-white text-6xl font-bold text-center">Welcome back<br/>to Food Find</h1>
                </div>
                <div className="h-full w-2/5 bg-white flex items-center justify-center">
                    <LoginForm />
                </div>
            </div>
        </div>
    )
}

export { Login }