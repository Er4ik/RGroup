import React from "react";
import "../../assets/styles/registration.scss";
import { RegistrationFlow } from "../../components/registration-flow/registrationFlow";

const SignUp = () => {
    return (
        <RegistrationFlow 
            // form={<LoginForm />} 
            text={<>Let's register!</>} 
            shape={"square"}
        />
    )
}

export { SignUp }