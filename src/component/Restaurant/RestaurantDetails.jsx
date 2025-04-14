import React, { useState } from 'react';
import { Grid, Divider, Typography, FormControl, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import MenuCard from './MenuCard'
const foodTypes = [
    {label:'All', value:'all'},
    {label:'Vegetarian only', value:'vegetarian'},
    {label:'Non-Vegetarian', value:'non_vegetarian'},
    {label:'Seasonal', value:'seasonal'}
]
const categories = [
    'All',
    'Pizza',
    'biryani',
    'burger',
    'hot pot',
    'chicken'
]
const menu = [1,1,1,1,1,1,1,1,1,1,1,1,1];
export const RestaurantDetails = () => {
    const [foodType, setFoodType] = useState("all");
    const [foodCategory, setFoodCategory] = useState('All');
    const handleFilter = (e) => {
        console.log(e.target.value, e.target.name)
        setFoodType(e.target.value)
    }
    const handleFilterCategory =(e) => {
        setFoodCategory(e.target.value);
    }
    return (
        <div className='px-5 lg:px-20'>
            <section className=''>
                <h3 className='text-gray-500 py-2 mt-10'>Home/india/indian fast food/3</h3>
                <div>
                    <Grid container spacing={2}>
                        <Grid item size={12} >
                            <img className='w-full h-[40vh] object-cover'  src='http://res.cloudinary.com/dcpesbd8q/image/upload/v1707802815/ux3xq93xzfbqhtudigv2.jpg' alt=''/>
                        </Grid>
                        <Grid item  size={{xs:12, md:6, sm:6, lg:6}}>
                            <img className='w-full h-[40vh] object-cover'  src='http://res.cloudinary.com/dcpesbd8q/image/upload/v1707802815/ux3xq93xzfbqhtudigv2.jpg' alt=''/>
                        </Grid>
                        <Grid item  size={{xs:12, md:6, sm:6, lg:6}}>
                            <img className='w-full h-[40vh] object-cover'  src='http://res.cloudinary.com/dcpesbd8q/image/upload/v1707802815/ux3xq93xzfbqhtudigv2.jpg' alt=''/>
                        </Grid>
                    </Grid>
                </div>
                <div className='pt-3 pb-5'>
                    <h1 className='text-4xl font-semibold'>Indian Fast Food</h1>
                    <p className='text-gray-500 items-center mt-3'>
                        <span>
                            description
                        </span>
                    </p>
                    <div className="space-y-3 mt-3">
                        <div className='text-gray-500 flex items-center gap-3'>
                            <LocationOnIcon/>
                            <span>Seatle, WA</span>
                        </div>
                        <div className='text-gray-500 flex items-center gap-3'>
                            <CalendarTodayIcon/>
                            <span>Mon-sun: 9:00AM-9:00PM(Today)</span>
                        </div>

                    </div>

                </div>
            </section>
            <Divider/>
            <section className='pt-[2rem] lg:flex relative'>
                <div className='space-y-10 lg:w-[20%] filter lg:sticky top-8 max-h-[calc(100vh-2rem)] overflow-auto'>
                    <div className='box space-y-5 '>
                        <Typography variant='h5' sx={{paddingBottom:'1rem'}}>
                            Food Type
                        </Typography>
                        <FormControl className='py-10 space-y-5' component={"fieldset"}>
                            <RadioGroup name='food_type' value={foodType} onChange={handleFilter}>
                                {foodTypes.map((item)=><FormControlLabel key={item.value} value={item.value} control={<Radio />} label={item.label} />)}
                            </RadioGroup>
                        </FormControl>
                    </div>
                    <Divider/>
                    <div className='box space-y-5 '>
                        <Typography variant='h5' sx={{paddingBottom:'1rem'}}>
                            Food Category
                        </Typography>
                        <FormControl className='py-10 space-y-5' component={"fieldset"}>
                            <RadioGroup name='food_category' value={foodCategory} onChange={handleFilterCategory}>
                                {categories.map((item)=><FormControlLabel key={item} value={item} control={<Radio />} label={item} />)}
                            </RadioGroup>
                        </FormControl>
                    </div>
                </div>
                <div className='space-y-5 lg:w-[80%] lg:pl-10 filter'>
                    {
                        menu.map((item) => <MenuCard/>)
                    }
                </div>

            </section>
        </div>
    )
}
