import React from "react";
import { LoginForm } from "../../components/registrationForm/loginForm";
import "../../assets/styles/registration.scss";
import { RegistrationFlow } from "../../components/registration-flow/registrationFlow";

const Login = () => {
    return (
        <RegistrationFlow 
            form={<LoginForm />} 
            text={<>Welcome back<br/>to Food Find</>} 
            shape={"circle-orange"}
        />
    )
}

export { Login }