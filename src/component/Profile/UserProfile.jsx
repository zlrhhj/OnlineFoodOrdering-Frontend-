import React from 'react';
import { Button } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const UserProfile = () => {
    const handleLogout = () => {}
    return (
        <div className='min-h-[80vh] flex flex-col justify-center items-center text-center'>
            <div className='flex flex-col items-center justify-center'>
                <AccountCircleIcon sx={{ fontSize: "9rem" }}/>
                <h1 className='py-5 text-2xl font-semibold '>User Name</h1>
                <p>Email: codewithzhao@example.com</p>
                <Button  onClick={handleLogout} variant="contained" color="primary" sx={{ margin: "2rem 0rem" }}>
                    Logout
                </Button>

            </div>
        </div>
    );
};

export default UserProfile;