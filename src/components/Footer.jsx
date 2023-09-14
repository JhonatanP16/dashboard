import { Box, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <Box
    sx={{
        display:'flex',
        height:'50px',
        justifyContent:'center',
        mt:2
    }}>
        <Typography sx={{fontSize:'12px', textAlign:'center',color:'text.secondary'}}>
            Copyright &copy; Panduro Los derechos Reservados 
            { new Date().getFullYear()}
        </Typography>
    </Box>
  )
}

export default Footer
