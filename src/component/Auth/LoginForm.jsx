import React from 'react';
import { Formik, Field, Form, ErrorMessage } from "formik";
import { TextField, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
const initialValues = {
    email: "",
    password: "",
};
const validate = (values) => {
    const errors = {};
    if (!values.email) {
        errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Email address is invalid";
    }
    if (!values.password) {
        errors.password = "Password is required";
    } else if (values.password.length < 6) {
        errors.password = "Password must be at least 6 characters";
    }
    return errors;
};

const LoginForm = () => {
    const navigate = useNavigate();
    const handleSubmit = (values) => {
        console.log("Form values: ", values);
        // Handle login logic here
    };
    return (
        <div>
            <Typography variant="h5" className="text-center " sx={{mb:3}}>
                Login
            </Typography>
            <Formik
                initialValues={initialValues}
                validate={validate}
                onSubmit={handleSubmit}
                >
                    <Form>
                        <Field
                            as={TextField}
                            name="email"
                            label="Email"
                            variant="outlined"
                            fullWidth
                            helperText={<ErrorMessage name="email">
                                {(msg) => <span style={{color:'red'}}>{msg}</span>}
                            </ErrorMessage>}
                            error={!ErrorMessage("email")}
                            required
                            magrin="normal"
                        />
                        <Field
                            as={TextField}
                            name="password"
                            label="Password"
                            type="password"
                            variant="outlined"
                            fullWidth
                            helperText={<ErrorMessage name="password">
                                {(msg) => <span style={{color:'red'}}>{msg}</span>}
                            </ErrorMessage>}
                            error={!ErrorMessage("password")}
                            required
                            margin="normal"
                        />
                        <Button type="submit" variant="contained" color="primary" sx={{mt:2, padding:'1rem'}} fullWidth>
                            Login
                        </Button>


                    </Form>

            </Formik>
            <Typography variant="body2" className="text-center" sx={{mt:3}}>
                Don't have an account? <Button size='small' onClick={()=>navigate('/account/register')}>Register</Button>
            </Typography>
        </div>
    );
};

export default LoginForm;