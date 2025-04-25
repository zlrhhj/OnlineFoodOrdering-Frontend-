import React from 'react';

import {Button, TextField, Typography, FormControl, InputLabel,Select, MenuItem} from '@mui/material';
import { useNavigate } from 'react-router-dom';
const { Formik, Field, Form, ErrorMessage } = require("formik");
const initialValues = {
    fullname: "",
    email: "",
    password: "",
    role: "ROLE_CUSTOMER"
};
const validate = (values) => { };
const Register = () => {
    const navigate = useNavigate();
    const handleSubmit = (values) => {
        console.log("Form values: ", values);
        // Handle login logic here
    };
    return (
        <div>
            <Typography variant="h5" className="text-center " sx={{mb:3}}>
                Register
            </Typography>
            <Formik
                initialValues={initialValues}
                validate={validate}
                onSubmit={handleSubmit}
                >
                    <Form>
                        <Field
                            as={TextField}
                            name="fullname"
                            label="Full Name"
                            variant="outlined"
                            fullWidth
                            helperText={<ErrorMessage name="fullname">
                                {(msg) => <span style={{color:'red'}}>{msg}</span>}
                            </ErrorMessage>}
                            error={!ErrorMessage("fullname")}
                            required
                            margin="normal"
                        />
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
                            margin="normal"
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
                        <FormControl fullWidth  margin="normal" >
                            <InputLabel id="demo-simple-select-label">Role</InputLabel>
                            <Field
                                as={Select}
                                labelId="demo-simple-select-label"
                                name="role"
                            >
                                <MenuItem value={"ROLE_CUSTOMER"}>Customer</MenuItem>
                                <MenuItem value={"ROLE_RESTAURANT_OWNER"}>Restaurant Owner</MenuItem>

                            </Field>
                        </FormControl>
                        <Button type="submit" variant="contained" color="primary" sx={{mt:2, padding:'1rem'}} fullWidth>
                            Register
                        </Button>


                    </Form>

            </Formik>
            <Typography variant="body2" className="text-center" sx={{mt:3}}>
                Already have an account? <Button size='small' onClick={()=>navigate('/account/login')}>Login</Button>
            </Typography>
        </div>
    );
};

export default Register;