import { useFormik } from "formik";
import React, { useState } from "react";
import * as Yup from 'yup';
import { Input } from "../../../components/input/input";
import { Button } from "../../../components/button/button";
import { SupportText } from "../../../components/registration-flow/supportText";
import google from "../../../assets/pictures/google.png"; 
import { routes } from "../../../helpers";
import { SentForm } from "../../../components/registration-flow/sentForm";

const SignUpForm = () => {
    const [flagSentForm, setFlagSentForm] = useState(false);
    const availableFieldForm = {
        name: "Name",
        email: "Email",
        password: "Password",
        confirmPassword: "Confirm Password",
    }

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
        onSubmit: (values) => handleSubmit(values),
        validationSchema: Yup.object({
            name: Yup.string()
            .required("Field must be filled!")
            .max(50, "String must be shorter!")
            .trim(),
            email: Yup.string()
            .required("Field must be filled!")
            .email("Incorrect email address!")
            .max(50, "String must be shorter!")
            .trim(),
            password: Yup.string()
            .required("Field must be filled!")
            .max(50, "Password must be shorter!")
            .min(8, "Password must be at least 8 characters long!")
            .matches(/^(?=.*\d)(?=.*[0-9])(?=.*[a-zA-Z]).{8,}$/, "The password should contain at least one letter and one number or more!")
            .trim(),
            confirmPassword: Yup.string()
            .required("Field must be filled!")
            .max(50, "Password must be shorter!")
            .min(8, "Password must be at least 8 characters long!")
            .matches(/^(?=.*\d)(?=.*[0-9])(?=.*[a-zA-Z]).{8,}$/, "The password should contain at least one letter and one number or more!")
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
        <div className={`w-5/6 ${flagSentForm ? "h-64" : "h-5/6"} flex flex-col items-center justify-center`}>
            {
                flagSentForm ? (
                    <SentForm 
                        mainText={"The account has been created"}
                        secondText={"Please check your email and follow the link we have sent you to confirm an email"}
                        valueButton={"Sign in"}
                        colorButton={"gradient"}
                        navTo={routes.signIn}
                        handleClick={handleResend}
                    />
                ) : (
                    <form className="h-full w-full flex flex-col justify-around">
                        <h3 className="text-blue font-bold text-label">Registration</h3>
                        {
                            Object.keys(availableFieldForm).map((elem, index) => {
                                return (
                                    <Input 
                                        name={elem} 
                                        value={formik.values[elem]}
                                        placeholder={availableFieldForm[elem]}  
                                        onChange={formik.handleChange} 
                                        error={formik.errors[elem]} 
                                        key={index}
                                    />
                                )
                            })
                        }
                        <Button 
                            value={"Sign up"} 
                            color={"gradient"} 
                            width={"auto"}
                            handleClick={formik.handleSubmit}
                        />
                        <Button 
                            value={"Sign in with Google"} 
                            color={"white"} 
                            icon={google} 
                            width={"auto"} 
                        />
                        <SupportText mainText={"Already have an account yet?"} textLink={"Sign in now."} navTo={routes.signIn}/>
                    </form>
               )
            }
        </div>
    )
}

export { SignUpForm }