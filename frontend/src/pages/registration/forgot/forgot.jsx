import React from "react";
import "../../../assets/styles/registration.scss";
import { RegistrationFlow } from "../../../components/registration-flow/registrationFlow";
import { ForgotForm } from "./forgotForm";

const Forgot = () => {
    return (
        <RegistrationFlow 
            form={<ForgotForm />} 
            text={<>Forgot password?<br/>Reset now!</>} 
            shape={"square"}
        />
    )
}

export { Forgot }