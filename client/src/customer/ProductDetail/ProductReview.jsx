import { Avatar, Box, Grid, Rating } from '@mui/material'
import React from 'react'

const ProductReview = () => {
    return (
        <div>
            <Grid container spacing={2} gap={3}>
                <Grid item xs={1}>
                    <Box>
                        <Avatar className='text-white' sx={{width:56, height: 56, bgColor: "#9155fd"}}>R</Avatar>
                    </Box>
                </Grid>
            </Grid>

            <Grid item xs={9}>
                <div className='space-y-2'>
                    <div>
                        <p className='font-semibold text-lg'>TranDuc</p>
                        <p className='opacity-70'>November 30, 2023</p>
                    </div>
                </div>

                <Rating value={4.5} name='half-rating' readOnly precision={.5} /> 
                <p>abc</p>
            </Grid>
        </div>
    )
}

export default ProductReview