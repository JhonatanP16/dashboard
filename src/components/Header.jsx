import { DarkModeOutlined, Dehaze, LightModeOutlined, NotificationImportantOutlined, Search } from '@mui/icons-material';
import { AppBar, Badge, Box, IconButton, Stack, Toolbar, Tooltip, Typography } from '@mui/material';
import React, { useContext } from 'react'
import { ColorModeContext } from '../context/ColorModeContext';
import ProfileMenu from './ProfileMenu';
import ThemePalete from './ColorSetting';
import ColorSetting from './ColorSetting';

const Header = ({openNav}) => {
const NAV_WIDTH = 250;

const {toogleMode,mode} = useContext(ColorModeContext);

  return (
    <AppBar
    position="fixed"
      sx={{
        width: { md: `calc(100% - ${NAV_WIDTH}px)` },
        ml: { md: `${NAV_WIDTH}px` },
        boxShadow: "unset",
        color: "text.primary",
        borderBottomWidth: 1,
        borderBottomColor: "divider",
        bgcolor:'transparent',
        backdropFilter:'blur(6px)',
        backgroundImage:'none',
      }}
      >
      <Toolbar >
       <Box sx={{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        width:'100%',
        
       }}>
        <Box sx={{
          display:'flex',
          alignItems:'center',
          gap:1,
        }}>
          <Tooltip title='Menu' arrow>
            <IconButton
            onClick={openNav}
            sx={{
              mr: 1,
              color: 'text.secondary',
              display: { md: 'none' },
            }}
          >
            <Dehaze/>
          </IconButton>
          </Tooltip>
          <Tooltip title='Buscar' arrow>
            <IconButton
            sx={{fontSize:"20px", color:'text.secondary'}}
            >
              <Search/>
            </IconButton>
          </Tooltip>
        </Box>
          <Stack direction='row' spacing={1} alignItems="center"> 
            <Tooltip title='notificaciones' arrow>
              <IconButton
              sx={{fontSize:"20px", color:'text.secondary'}}
              >
                <Badge color='error' variant='dot'>
                  <NotificationImportantOutlined/>
                </Badge>
              </IconButton>
            </Tooltip>
            <Tooltip title='Cambiar modo' arrow>
              <IconButton
              sx={{fontSize:'20px',color:'text.secondary'}}
              onClick={toogleMode}
              >
                {mode === 'light' ?  <DarkModeOutlined/>: <LightModeOutlined/>}
              </IconButton>
            </Tooltip>
            <ColorSetting/>
            <ProfileMenu/>
          </Stack>
       </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header
