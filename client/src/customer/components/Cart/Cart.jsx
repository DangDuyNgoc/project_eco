import React from 'react';
import CartItem from './CartItem'
import { Button } from '@mui/material';


const Cart = () => {
    return (
        <div>
            <div className='lg:grid gird-cols-3 lg:px-16 relative'>
                <div className='col-span-2'>
                    {[1, 1, 1, 1].map(item => <CartItem />)}
                </div>
                <div className='px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0'>
                    <div className='border'>
                        <p className='uppercase font-bold opacity-60 pb-4'>Price Details</p>
                        <hr />
                        <div className='space-y-3 font-semibold'>
                            <div className='flex justify-between pt-3 text-black'>
                                <span>Price</span>
                                <span>4000</span>
                            </div>
                            <div className='flex justify-between pt-3'>
                                <span>Discount</span>
                                <span className='text-green-600'>4000</span>
                            </div>
                            <div className='flex justify-between pt-3'>
                                <span>Delivery Charge</span>
                                <span className='text-green-600'>4000</span>
                            </div>
                            <div className='flex justify-between pt-3'>
                                <span>Total Amount</span>
                                <span className='text-green-600'>4000</span>
                            </div>
                        </div>
                        <Button 
                            variant="contained" 
                            className='w-full mt-5'
                            sx={{px: "2.5rem", py: ".7rem", bgColor: "#9155fd"}}
                        >
                            Checkout
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart