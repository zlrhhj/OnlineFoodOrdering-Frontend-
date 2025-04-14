import React from 'react';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const RestaurantCard = () => {
    return (
        <Card className='w-[20rem]'>
            <div className={`${true ? 'cursor-pointer' : 'cursor-not-allowed'} relative`}>

                <img
                    className='w-full h-[10rem] rounded-t-md object-cover'
                    src='https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt=''/>
                <Chip
                    size='Small'
                    className='absolute top-2 left-2'
                    color= {true? 'success' :'error'}
                    label= {true ? 'open' : 'closed'}
                />
            </div>
            <div className='p-5 textPart lg:flex w-full justify-between'>
                <div className='space-y-1'>
                    <p className = 'font-semibold text-lg'>Indian classic food</p>
                    <p className = 'text-gray-400 text-sm'>Carving it all? Dive into our global fla...</p>
                </div>
                <div>
                    <IconButton>
                    {true ? <FavoriteIcon/>:<FavoriteBorderIcon/>}
                    </IconButton>
                </div>
            </div>

        </Card>
    )
}
export default RestaurantCard;