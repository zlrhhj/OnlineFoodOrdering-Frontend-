import React, {useState} from 'react';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HomeIcon from '@mui/icons-material/Home';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import EventIcon from '@mui/icons-material/Event';
import LogoutIcon from '@mui/icons-material/Logout';
import {Drawer, useMediaQuery, Divider} from '@mui/material';
import {useNavigate} from 'react-router-dom';

const menu = [
    {title: 'My Orders', icon: <ShoppingBagIcon/>, path: 'orders'},
    {title: 'My Favorites', icon: <FavoriteIcon/>, path: 'favorites'},
    {title: 'Address', icon: <HomeIcon/>, path: 'address'},
    {title: 'Payments', icon: <AccountBalanceWalletIcon/>, path: 'payments'},
    {title: 'Notifications', icon: <NotificationsActiveIcon/>, path: 'notifications'},
    {title: 'Events', icon: <EventIcon/>, path: 'events'},
    {title: 'Logout', icon: <LogoutIcon/>, path: 'logout'}

]

const ProfileNavigation = ({open, handleClose}) => {
    const isSmallScreen = useMediaQuery('(max-width: 1079px)');
    const  navigate = useNavigate();
    const handleMenuClickNavigation = (item) => {
        console.log(item);
        navigate(`/my-profile/${item.path}`);
    }
    return (
        <div >
           <Drawer
                open={isSmallScreen ? open : true}
                onClose={handleClose}
                variant={isSmallScreen ? 'temporary' : 'persistent'}
                anchor="left"
                sx={{
                    position: 'sticky',
                    zIndex: -1
                }}
            >
                <div className='w-[50vw] lg:w-[20vw] h-[100vh] flex flex-col justify-start text-xl gap-8 pt-28'>

                {
                    menu.map((item, index) => (
                        <>
                        <div onClick={() => handleMenuClickNavigation(item)} key={index} className='px-10 flex items-center space-x-5 cursor-pointer hover:bg-gray-300 rounded-md'>
                            {item.icon}
                            <span>{item.title}</span>
                        </div>
                            {index !== menu.length - 1 && <Divider/>}
                        </>

                        ))
                }

                </div>
            </Drawer>
        </div>
    );
};

export default ProfileNavigation;