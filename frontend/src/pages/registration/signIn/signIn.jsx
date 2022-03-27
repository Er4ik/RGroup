import React from "react";
import { SignInForm } from "./signInForm";
import "../../../assets/styles/registration.scss";
import { RegistrationFlow } from "../../../components/registration-flow/registrationFlow";

const SignIn = () => {
    return (
        <RegistrationFlow 
            form={<SignInForm />} 
            text={<>Welcome back<br/>to Food Find</>} 
            shape={"circle-orange"}
        />
    )
}

export { SignIn }