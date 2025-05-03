import React from 'react';
import ProfileNavigation from './ProfileNavigation';
import { Routes, Route } from 'react-router-dom';
import UserProfile from './UserProfile';
import Orders from './Orders';
import Favorites from './Favorites';
import Address from './Address';
import Events from './Events';


export const Profile = () => {
    const [open, setOpen] = React.useState(false);
    return (
        <div className="lg:flex justify-between items-center">
            <div className="sticky h-[80vh] lg:w-[20%]">
                <ProfileNavigation open={open}/>
            </div>
            <div className="lg:w-[80%] lg:ml-4">
                <Routes>
                    <Route path="/" element={<UserProfile/>} />
                    <Route path="/orders" element={<Orders/>} />
                    <Route path="/favorites" element={<Favorites/>} />
                    <Route path="/address" element={<Address/>} />
                    <Route path="/payments" element={<div>Payments</div>} />
                    <Route path="/notifications" element={<div>Notifications</div>} />
                    <Route path="/events" element={<Events/>} />
                    <Route path="/logout" element={<div>Logout</div>} />
                </Routes>

            </div>
        </div>
    );
};

//export default Profile;