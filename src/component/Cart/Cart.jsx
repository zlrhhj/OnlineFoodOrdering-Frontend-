import React, {useState} from 'react';
import CartItem from './CartItem';
import {Divider, Button, Card, Modal, Typography, Box, TextField, Grid} from '@mui/material'
import { Form } from 'formik';
import AddressCard from './AddressCard';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const items = [1,1];
export const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
const initialValues = {
    streetAddress: '',
    city:'',
    state: '',
    country: '',
    zipcode: '',
}
const validationSchema = Yup.object().shape({
    streetAddress: Yup.string().required('Street Address is required'),
    city: Yup.string().required('City is required'),
    state: Yup.string().required('State is required'),
    country: Yup.string().required('Country is required'),
    zipcode: Yup.string().required('Zipcode is required'),
});


export const Cart = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleSelect = (item) => {
        console.log(item);
    }
    const handleSubmit = (value) => {
        console.log("form value is ", value);
        handleClose();
    }

    return(
        <div>
            <main className='lg:flex justify-between'>
                <section className='lg:w-[30%] space-y-6 lg:min-h-screen pt-10'>
                {
                    items.map((item) => <CartItem/>)
                }
                <Divider/>
                <div className='billDetails px-5 text-sm'>
                    <p className='font-extralight py-5'>Bill Details</p>
                    <div className='space-y-3'>
                        <div className='flex justify-between text-gray-400'>
                            <p>Item Total</p>
                            <p>$20</p>
                        </div>
                        <div className='flex justify-between text-gray-400'>
                            <p>Dilivery Fee</p>
                            <p>$20</p>
                        </div>
                        <div className='flex justify-between text-gray-400'>
                            <p>GST</p>
                            <p>$5.55</p>
                        </div>
                        <Divider/>
                    </div>
                    <div className='flex justify-between text-gray-400 py-5'>
                        <p>Total Pay</p>
                        <p>$45</p>
                    </div>
                </div>
                </section>
                <Divider orientation='vertical' flexItem/>
                <section className='lg:w-[70%] flex justify-center px-5 pb-10 lg:pb-0'>
                    <div>
                        <h1 className='text-center font-semibold text-2xl py-10'>
                            Choose Delivery Address
                        </h1>
                        <div className='flex gap-5 flex-wrap justify-center'>
                            {
                                [1,1,1].map((item) =>
                                    <AddressCard
                                        showButton={true}
                                        selectAddress={handleSelect}
                                    />)
                            }
                            <Card className='flex gap-5 w-64  h-44 p-5'>
                                <AddLocationAltIcon/>
                                <div className='space-y-3 text-gray-500 flex flex-col items-center justify-between'>
                                    <h1 className='font-semibold text-lg text-white'>Add New Address</h1>

                                    <Button variant='outlined' fullWidth onClick={handleOpen}> Add </Button>
                                </div>
                            </Card>
                        </div>
                    </div>

                </section>

            </main>
            <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}>
                <Form className='flex flex-col justify-center items-center w:[100%]'>
                    <Grid container spacing={2} className='p-5'>
                        <Grid item xs={12} sx={{px:0, width:'100%'}}>
                            <Typography variant='h5' className='text-center pb-5' >
                                Add New Address
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sx={{px:0, width:'100%'}} >
                            <Field
                                as={TextField}
                                name="streetAddress"
                                label="Street Address"
                                variant="outlined"
                                fullWidth
                                helperText={<ErrorMessage name="streetAddress">
                                {(msg) => <span style={{color:'red'}}>{msg}</span>}
                                </ErrorMessage>}
                                error={!ErrorMessage("streetAddress")}
                                required
                            />


                        </Grid>
                        <Grid item xs={12} sx={{px:0, width:'100%'}}>
                            <Field
                                as={TextField}
                                name="city"
                                label="City"
                                variant="outlined"
                                fullWidth
                                helperText={<ErrorMessage name="city">
                                {(msg) => <span style={{color:'red'}}>{msg}</span>}
                                </ErrorMessage>}
                                error={!ErrorMessage("city")}
                                required
                            />
                        </Grid>
                        <Grid item xs={12} sx={{px:0, width:'100%'}}>
                        <Field
                                as={TextField}
                                name="state"
                                label="State"

                                variant="outlined"
                                fullWidth
                                helperText={<ErrorMessage name="state">
                                    {(msg) => <span style={{color:'red'}}>{msg}</span>}
                                </ErrorMessage>}
                                error={!ErrorMessage("state")}
                                required
                            />
                        </Grid>
                        <Grid item xs={12} sx={{px:0, width:'100%'}}>
                        <Field
                                as={TextField}
                                name="country"
                                label="Country"
                                variant="outlined"
                                fullWidth
                                helperText={<ErrorMessage name="country">
                                    {(msg) => <span style={{color:'red'}}>{msg}</span>}
                                </ErrorMessage> }
                                error={!ErrorMessage("country")}
                                required
                            />
                        </Grid>
                        <Grid item xs={12} sx={{px:0, width:'100%'}}>
                        <Field
                                as={TextField}
                                name="zipcode"
                                label="Zipcode"

                                variant="outlined"
                                fullWidth
                                helperText={<ErrorMessage name="zipcode" >
                                    {(msg) => <span style={{color:'red'}}>{msg}</span>}
                                </ErrorMessage>}
                                error={!ErrorMessage("zipcode")}
                                required
                            />
                        </Grid>
                        <Grid item xs={12} sx={{px:0, width:'100%'}}>
                            <Button className='pt-40' variant='contained' color='primary' type='submit' fullWidth >Deliver Here</Button>
                        </Grid>

                    </Grid>
                </Form>
          </Formik>
        </Box>
      </Modal>
        </div>
    )
}
//export default Cart;