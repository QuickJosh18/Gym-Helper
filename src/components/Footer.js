import React from 'react'
import { Box, Stack, Typography } from '@mui/material'

const Footer = () => {
  return (
    <Box mt='80px' bgcolor='#fff3f4'>
      <Stack gap='40px' sx={{alignItems: 'center'}} px='40px' pt='24px'>
        <Typography variant='h5' pb='20px' mt='15px'>Copyright @2022 Grzegorz Kawecki</Typography>
      </Stack>
    </Box>
  )
}

export default Footer