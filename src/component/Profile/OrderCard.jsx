import React from 'react';
import { Button, Card } from '@mui/material';

const OrderCard = () => {
    return (
        <Card className='flex justify-between items-center py-5 px-5 shadow-md'>
            <div className='flex items-center space-x-5'>
                <img src="https://via.placeholder.com/150" alt="Order Item" className='w-16 h-16 rounded' />
                <div>
                    <h2 className='text-lg font-semibold'> Restaurant Name</h2>
                    <p className='text-gray-500'>Price: $19</p>
                </div>
            </div>
            <Button className='cursor-not-allowed' variant='contained' color='primary' sx={{ padding: '0.5rem 1.5rem' }} >
                Completed
            </Button>
        </Card>
    );
};

export default OrderCard;