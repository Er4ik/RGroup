import { useFormik } from "formik";
import React, { useState } from "react";
import * as Yup from 'yup';

const LoginForm = () => {
    const initialValues = useState({
        email: "",
        password: "",
    })

    const formik = useFormik({
        initialValues,
        onSubmit: (values) => handleSubmit(values),
        validationSchema: Yup.object({
            email: Yup.string(),
            password: Yup.string(),
        })
    })

    const handleSubmit = (values) => {
        return;
    }

    return (
        <div>
            <form>
                
            </form>
        </div>
    )
}

export { LoginForm }