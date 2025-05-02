import React from 'react';
import { Modal , Box} from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import {style} from '../Cart/Cart';
import Register from './Register';
import LoginForm from './LoginForm';
const Auth = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const handleClose = () => {
        navigate("/");
    };
    return (
        <Modal open={location.pathname === "/account/register" || location.pathname==="/account/login"}
            onClose={ handleClose} >
            <Box sx={style}>
                {
                    location.pathname === "/account/register" ?
                    <Register/>
                    :
                    <LoginForm/>

                }
            </Box>
        </Modal>
    );
};

export default Auth;