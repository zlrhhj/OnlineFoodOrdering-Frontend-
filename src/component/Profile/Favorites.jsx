import React from 'react';
import RestaurantCard from '../Restaurant/RestaurantCard'; // Adjust the path as needed

const Favorites = () => {
    return (
        <div className=' '>
            <h1 className='py-5 text-4xl font-semibold text-center m-5'>My Favorites</h1>
            <div className='flex flex-wrap gap-5 justify-center' >
            {
                [1,1,1,1,1,1].map((item) => <RestaurantCard/>)
            }
            </div>

        </div>
    );
};

export default Favorites;