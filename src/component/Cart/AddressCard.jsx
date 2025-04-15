import React from 'react';
import { Card, Button } from '@mui/material';
import HouseIcon from '@mui/icons-material/House';
const AddressCard = ({item, showButton, selectAddress}) => {

    return(
        <Card className='flex gap-5 w-64 h-44  p-5'>
            <HouseIcon/>
            <div className='space-y-3 text-gray-500'>
                <h1 className='font-semibold text-lg text-white'>Home</h1>
                <p className='text-gray-400 text-sm'>123, 2nd Floor, ABC Street, XYZ City</p>
               {showButton && <Button variant='outlined' fullWidth onClick={()=> selectAddress(item)}> Select</Button>}
            </div>
        </Card>
    )
}
export default AddressCard;