import React from 'react'
import { Box, Typography, Button} from '@mui/material'
import HeroBannerImage from '../assets/images/banner.jpg'

const HeroBanner = () => {
  return (
    <Box sx={{
        mt: {lg: '212px', xs: '70px'},
        ml: {sm: '50px'}
    }} position='relative' p='20px' marginBottom={24}>
        <Typography color = '#ff2625' fontWeight='600' fontSize='26px'>
            You want to start your gym adventure?<br/>We got you!
        </Typography>
        <Typography 
        fontWeight={700}
        sx={{fontSize: {lg:'44px', xs: '40px'}}}
        mb='23px' mt='30px'
        >
            Grind, Gains <br/> and Respect
        </Typography>
        <Typography fontSize='22px' lineHeight='35px' mb={4}>
            You can search for exercises targeting muscle you want to train<br/>or find one fitting your equipment!
        </Typography>
        <Button 
        variant='contained' 
        color='error' 
        href='#exercises'
        sx={{backgroundColor: '#ff2625', padding: '10px'}}
        >
            Explore Exercises</Button>
        <img src={HeroBannerImage} alt='banner' className='hero-banner-img' />
    </Box>
  )
}

export default HeroBanner