import React from 'react';
import  EventCard  from './EventCard';

const Events = () => {
    return (
        <div className='flex flex-wrap mt-5 px-5 gap-5'>
        {
            [1,1,1,1,1,1].map((item) => <EventCard/>)
        }

        </div>
    );
};

export default Events;