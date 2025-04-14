import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, FormGroup, FormControlLabel, Checkbox, Button } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const demo = [
    {
        category: "Nuts and Seeds",
        ingredients:["Cashews"]
    },
    {
        category: "Protein",
        ingredients:["Gound beef","Bacon strips"]
    }
];
const MenuCard = () => {
    const handleCheckBoxChange = (value) => {
        console.log(value)
    }
    return(
        <div>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <div className='lg:flex item-center justify-between'>
                        <div className='lg:flex items-center lg:gap-5'>
                            <img className='w-[7rem] h-[7rem] object-cover'
                                src='https://images.pexels.com/photos/209540/pexels-photo-209540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                                alt=''
                            />
                            <div className='space-y-1 lg:space-y-5 lg:max-w-2xl'>
                                <p className='font-semibold text-xl'>Burger</p>
                                <p className='text-gray-400'>$499</p>
                                <p> food decription</p>
                            </div>
                        </div>
                    </div>
                </AccordionSummary>
                <AccordionDetails>
                    <form>
                        <div className='flex gap-5 flex-wrap'>
                            {
                                demo.map((item) =>
                                    <div>
                                        <p>{item.category}</p>
                                        <FormGroup>
                                        {
                                            item.ingredients.map((ingredient) =>
                                                <FormControlLabel control={<Checkbox  onChange={() => handleCheckBoxChange(item)}/>} label={ingredient} />)
                                        }
                                        </FormGroup>
                                    </div>

                                )
                            }
                        </div>
                        <div className='pt-5'>
                            <Button variant='contained' type="submit" disabled={false}>{true?"Add to Cart" : "Out Of Stock"}</Button>
                        </div>
                    </form>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}
export default MenuCard;