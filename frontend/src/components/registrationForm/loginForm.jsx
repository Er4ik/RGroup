import { useFormik } from "formik";
import React from "react";
import * as Yup from 'yup';
import { Button } from "../button/button";
import google from "../../assets/pictures/google.png"; 
import { SupportText } from "./supportText";
import { Input } from "../input/input";

const LoginForm = () => {
    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        onSubmit: (values) => handleSubmit(values),
    })
    const handleSubmit = (values) => {
        console.log(values);
    }

    return (
        <div className="w-5/6 h-4/6">
            <form className="h-full w-full flex flex-col justify-around" onSubmit={formik.handleSubmit}>
                <h3 className="text-blue font-bold text-label">Registration</h3>
                <Input name={"email"} placeholder={"Email"} onChange={formik.handleChange} />
                <Input name={"password"} placeholder={"Password"}  onChange={formik.handleChange} />
                <SupportText mainText={"Forgot password?"} textLink={"Reset now."}/>
                <Button 
                    type={"submit"} 
                    value={"Sign in"} 
                    color={"gradient"} 
                    width={"auto"}
                />
                <Button 
                    value={"Sign in with Google"} 
                    color={"white"} 
                    icon={google} 
                    width={"auto"} 
                />
                <SupportText mainText={"Don't have an account yet?"} textLink={"Register now."}/>
            </form>
        </div>
    )
}

export { LoginForm }