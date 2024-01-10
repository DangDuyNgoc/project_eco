import React from 'react';
import { Grid } from '@mui/material';
import AdjustIcon from '@mui/icons-material/Adjust';

const OrderCard = () => {
  return (
    <div className='p-5 shadow-md hover:shadow-2xl border'>
        <Grid container spacing={2} sx={{justifyContent: "space-between"}}>
            <Grid item xs={6}>
                <div className='flex cursor-pointer'>
                    <img className='w-[5rem] h-[5rem] object-cover object-top' alt='' />
                    <div className='ml-5 space-y-2'>
                        <p className=''>Men SLim Mid Rise</p>
                        <p className='opacity-50 text-xs font-semibold'>Size: M</p>
                        <p className='opacity-50 text-xs font-semibold'>Color: Black</p>
                    </div>
                </div>
            </Grid>
            <Grid xs={2}>
                <p>4000</p>
            </Grid>
            <Grid item xs={4}>
                {true && 
                    <div>
                        <p>
                            <AdjustIcon sx={{width: "15px", height: "15px"}} className='text-green-600 mr-2 text-sm'/>
                            <span>Delivery On March 03</span>
                        </p>
                        <p className='text-xs'>Your Item Has Been Delivered</p>
                    </div>
                }
                {false && 
                    <span>Expected Delivery On December 20</span>
                }
            </Grid>
        </Grid>
    </div>
  )
}

export default OrderCard