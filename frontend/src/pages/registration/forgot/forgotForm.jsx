import { useFormik } from "formik";
import React, { useState } from "react";
import * as Yup from 'yup';
import { Input } from "../../../components/input/input";
import { Button } from "../../../components/button/button";
import { SupportText } from "../../../components/registration-flow/supportText";
import { routes } from "../../../helpers";
import { SentForm } from "../../../components/registration-flow/sentForm";

const ForgotForm = () => {
    const [flagSentForm, setFlagSentForm] = useState(false);

    const formik = useFormik({
        initialValues: {
            email: "",
        },
        onSubmit: (values) => handleSubmit(values),
        validationSchema: Yup.object({
            email: Yup.string()
            .required("Field must be filled!")
            .email("Incorrect email address!")
            .max(50, "String must be shorter!")
            .trim(),
        })
    })
    const handleSubmit = (values) => {
        if(Object.values(formik.errors).length > 0) {
            return;
        }

        setFlagSentForm(true);
        return;
    }

    const handleResend = () => {
        setFlagSentForm(false);
        return;
    }

    return (
        <div className={`w-5/6 ${flagSentForm ? "h-56" : "h-72"} flex flex-col items-center justify-center`}>
            {
                flagSentForm ? (
                    <SentForm 
                        mainText={"The link has been sent"}
                        secondText={"Please check your email and follow the link we have sent you to reset a password"}
                        valueButton={"Sign in"}
                        colorButton={"gradient"}
                        navTo={routes.signIn}
                        handleClick={handleResend}
                    />
                ) : (
                <form className="h-full w-full flex flex-col justify-around">
                    <h3 className="text-blue font-bold text-label">Forgot</h3>
                    <Input 
                        name={"email"} 
                        value={formik.values.email}
                        placeholder={"Email"} 
                        onChange={formik.handleChange} 
                        error={formik.errors.email} />
                    <p className="text-blue text-m font-medium">Send a link to your email to reset your password.</p>
                    <Button 
                        value={"Send reset link"} 
                        color={"gradient"} 
                        width={"auto"}
                        handleClick={formik.handleSubmit}
                    />
                    <SupportText mainText={"Remember password?"} textLink={"Sign in now."} navTo={routes.signIn}/>
                </form>
                )
            }
        </div>
    )
}

export { ForgotForm }