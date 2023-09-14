import { Box } from '@mui/material'
import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const DashboardLayout = () => {
    const [open,setOpen] = useState(false);

  return (
    <Box sx={{
        display:'flex',
        bgcolor:'background.default',
    }}> 
      <Header openNav={() => setOpen(true)}/>
      <Navbar openNav={open} onCloseNav={() => setOpen(false)}/>
      <Box
      sx={{
        px: { xs: 1, md: 2 },
        width: { xs: "100%", md:`calc(100% - ${250}px)`},
      }}>
       <Outlet/>
       <Footer/>
      </Box>
    </Box>
  )
}

export default DashboardLayout
