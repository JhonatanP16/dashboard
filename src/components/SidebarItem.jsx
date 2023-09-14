import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import React from 'react'
import { NavLink as RouterLink} from 'react-router-dom';

const SidebarItem = ({navItem}) => {
  return (
    <ListItem 
                component="div"
                sx={{ 
                    height: 56,
                    px:1,
                }}>
                <ListItemButton
                component={RouterLink}
                to={navItem.path}
                sx={{
                    borderRadius:'10px',
                    '&.active':{
                        color:'primary.main',
                        bgcolor:'sidebaractive.default',
                    },
                    '&:hover':{
                        /* color:'sidebaractive.color', */
                    },
                    color:'text.secondary',
                    fontSize: '15px',
                    lineHeight: '20px', 
                }}
                
                >
                    <ListItemIcon sx={{color:'inherit'}}>
                        {navItem.icon}
                    </ListItemIcon>
                    <ListItemText
                    disableTypography
                    primary={`${navItem.title}`}
                    sx={{ml:'-18px'}}
                    />
                </ListItemButton>
    </ListItem>
  )
}

export default SidebarItem
