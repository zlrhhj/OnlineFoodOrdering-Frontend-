import React from 'react';
import { IconButton, Avatar, Badge } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import { pink } from '@mui/material/colors';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './Navbar.css';
export const Navbar = () => {
  return (
    <div className = 'px-5 z-50 py-[.8rem] bg-[#e91e63] lg:px-20 flex justify-between'>

      <div className = 'lg:mr-10 cursor-pointer flex items-center space-x-4'>
        <li className="logo font-semibold text-gray-300 text-2xl">
          Zhao Food
        </li>

      </div>

      <div className='flex items-center space-x-2 lg:space-x-10'>
        <div>
          <IconButton >
            <SearchIcon sx={{fontSize:'1.5rem'}}/>
          </IconButton>
        </div>
        <div className=''>

          <Avatar sx={{bgcolor:'white', color:pink.A400}}>
            C
          </Avatar>
        </div>
        <div>
          <IconButton>
            <Badge color='primary' badgeContent={3}>
              <ShoppingCartIcon sx = {{fontSize:'2rem'}}></ShoppingCartIcon>
            </Badge>

          </IconButton>
        </div>
      </div>
    </div>

  )
}