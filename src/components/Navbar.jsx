import { Box, Drawer, List, Toolbar } from '@mui/material'
import React from 'react'
import { navConfig } from '../data/links';
import SidebarItem from './SidebarItem';
import SidebarItemCollapse from './SidebarItemCollapse';


const Navbar = ({openNav,onCloseNav}) => {

  const renderContent = (
    <Box sx={{
        display:'flex',
        flexDirection:'column',
    }}>
        <Toolbar sx={{fontSize:'20px',fontWeight:600,color:'primary.main'}}>
        San Sebastian
        </Toolbar>
        <List>
            {
                navConfig?.map((navItem,index) => navItem?.subLinks ? (
                  <SidebarItemCollapse key={index} navItem={navItem}/>
                ) : (
                  <SidebarItem key={index} navItem={navItem}/>
                ))
            }
        </List>
      
    </Box>
  );
  
  return (
    <Box
    component='nav'
    sx={{
        width:{lg:250},
    }}>
      <Drawer
        variant="temporary"
        open={openNav}
        onClose={onCloseNav}
        PaperProps={{
          sx:{
              width:250,
              display: { xs: "block", md: "none" },
              bgcolor:'background.default',
              backgroundImage:'none'
          }
      }}
      >
        {renderContent}
      </Drawer>
        <Drawer
        open
        variant="persistent"
        PaperProps={{
            sx:{
                width:250,
                display: { xs: 'none', md: 'block' },
                borderRightStyle: 'dashed',
                bgcolor:'background.default',
            }
        }}>
            {renderContent}
        </Drawer>
    </Box>
  )
}

export default Navbar
