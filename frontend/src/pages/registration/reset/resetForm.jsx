import { useFormik } from "formik";
import React, { useState } from "react";
import * as Yup from 'yup';
import { Input } from "../../../components/input/input";
import { Button } from "../../../components/button/button";
import { routes } from "../../../helpers";

const ResetForm = () => {
    const formik = useFormik({
        initialValues: {
            password: "",
            confirmPassword: "",
        },
        onSubmit: (values) => handleSubmit(values),
        validationSchema: Yup.object({
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

        return;
    }

    return (
        <div className="w-5/6 h-64 flex flex-col items-center justify-center">
            <form className="h-full w-full flex flex-col justify-around">
                <h3 className="text-blue font-bold text-label">Reset</h3>
                <p className="text-blue text-m font-medium">Please enter your new password.</p>
                <Input 
                    name={"password"} 
                    placeholder={"Password"} 
                    onChange={formik.handleChange} 
                    error={formik.errors.password} 
                />
                <Input 
                    name={"confirmPassword"} 
                    placeholder={"Confirm password"} 
                    onChange={formik.handleChange} 
                    error={formik.errors.confirmPassword} 
                />
                <Button 
                    value={"Reset password"} 
                    color={"gradient"} 
                    width={"auto"}
                    handleClick={formik.handleSubmit}
                    navTo={routes.signIn}
                />
            </form>
        </div>
    )
}

export { ResetForm }