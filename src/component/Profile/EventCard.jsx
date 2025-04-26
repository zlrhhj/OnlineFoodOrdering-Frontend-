import React from 'react';
import {Card, CardMedia, CardContent, Typography, CardActions, IconButton} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
const EventCard = () => {
    return (
        <Card sx={{ minWidth: 345, borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
            <CardMedia
                sx={{ height: 345 }}
                image="https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1.placeholder.com/150" />
            <CardContent>
                <Typography variant="h5" >
                    Restaurant Name
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    50% off on your first order
                </Typography>
                <div className='flex flex-col justify-between mt-2'>
                    <p>Pizza</p>
                    <p className='text-sm text-blue-500'> Starting Date time</p>

                    <p className='text-sm text-red-500'>Ending Date time</p>
                </div>
            </CardContent>
            {
                true && <CardActions>
                    <IconButton>
                        <DeleteIcon sx={{ color: 'red' }} />
                    </IconButton>
                </CardActions>
            }
        </Card>
    );
};

export default EventCard;