import { Collapse, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Adjust, ExpandLess, ExpandMore, Memory } from '@mui/icons-material';
import { NavLink as RouterLink, useLocation} from 'react-router-dom';

const SidebarItemCollapse = ({navItem}) => {
    const [open,setOpen] = useState(false);
    const [active,setActive] = useState(false);
    const {pathname} = useLocation();
    let url = pathname.split('/',3)[2];
    
    useEffect(() => {
        if(url === 'users'){
            setOpen(true);
            setActive(true);
        }else{
            setOpen(false);
            setActive(false);
        }
    },[pathname]);

  return (
    <>
    <ListItem component="div"
    sx={{ 
        height: 56,
        px:1,
    }}>
        <ListItemButton
            sx={{
                borderRadius:'10px',
                
                '&:hover':{
                    /* color:'sidebaractive.color', */
                },
                color: active ? 'primary.main' : 'text.secondary',
                bgcolor: active ? 'sidebaractive.default' : '',
                fontSize: '15px',
                lineHeight: '20px', 
            }}
            onClick={() => setOpen(!open)}
        >
            <ListItemIcon sx={{color:'inherit'}}>{navItem.icon}</ListItemIcon>
            <ListItemText
            disableTypography
            primary={`${navItem.title}`}
            sx={{ml:'-18px'}}/>
            {open ? <ExpandLess/>: <ExpandMore/>}
        </ListItemButton>
        </ListItem>
        <Collapse in={open} timeout="auto">
        <List component="div" sx={{px:1}}>
          {
            navItem.subLinks.map(({name,url},index) => (
                <ListItemButton
                component={RouterLink}
                end
                to={url}
                sx={{
                    borderRadius:'10px',
                    mx:'20px',
                    '&.active':{
                        color:'primary.main',
                    },
                    '&:hover':{
                        color:'primary.main',
                    },
                    color:'text.secondary',
                    fontSize: '13px',
                    lineHeight: '20px', 
                }}
                key={index}
                >
                    <ListItemIcon sx={{color:'inherit'}}>
                        <Adjust sx={{fontSize:'12px'}}/>
                    </ListItemIcon>
                    <ListItemText  disableTypography primary={name} sx={{ml:'-20px'}}/>
                </ListItemButton>
            ))
          }
        </List>
      </Collapse>
    </>
    
  )
}

export default SidebarItemCollapse
