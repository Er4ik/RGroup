import React from "react";
import "../../../assets/styles/registration.scss";
import { RegistrationFlow } from "../../../components/registration-flow/registrationFlow";
import { SignUpForm } from "./signUpForm";

const SignUp = () => {
    return (
        <RegistrationFlow 
            form={<SignUpForm />} 
            text={<>Let's register!</>} 
            shape={"square"}
        />
    )
}

export { SignUp }