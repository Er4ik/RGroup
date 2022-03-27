import { useFormik } from "formik";
import React from "react";
import * as Yup from 'yup';
import { Input } from "../../../components/input/input";
import { Button } from "../../../components/button/button";
import { SupportText } from "../../../components/registration-flow/supportText";
import google from "../../../assets/pictures/google.png"; 
import { routes } from "../../../helpers";

const SignInForm = () => {
    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        onSubmit: (values) => handleSubmit(values),
        validationSchema: Yup.object({
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
            .trim()
        })
    })

    const handleSubmit = (values) => {
        if(Object.values(formik.errors).length > 0) {
            return;
        }
        return;
    }

    return (
        <div className="w-5/6 h-4/6">
            <form className="h-full w-full flex flex-col justify-around">
                <h3 className="text-blue font-bold text-label">Login</h3>
                <Input 
                    name={"email"} 
                    value={formik.values.email}
                    placeholder={"Email"} 
                    onChange={formik.handleChange} 
                    error={formik.errors.email} />
                <Input 
                    name={"password"} 
                    value={formik.values.password}
                    placeholder={"Password"}  
                    onChange={formik.handleChange} 
                    error={formik.errors.password} />
                <SupportText mainText={"Forgot password?"} textLink={"Reset now."} navTo={routes.forgot}/>
                <Button 
                    value={"Sign in"} 
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
                <SupportText mainText={"Don't have an account yet?"} textLink={"Register now."} navTo={routes.signUp}/>
            </form>
        </div>
    )
}

export { SignInForm }