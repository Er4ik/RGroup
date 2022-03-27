import React from "react";
import "../../../assets/styles/registration.scss";
import { RegistrationFlow } from "../../../components/registration-flow/registrationFlow";
import { ResetForm } from "./resetForm";

const Reset = () => {
    return (
        <RegistrationFlow 
            form={<ResetForm />} 
            text={<>Forgot password?<br/>Reset now!</>} 
            shape={"square"}
        />
    )
}

export { Reset }