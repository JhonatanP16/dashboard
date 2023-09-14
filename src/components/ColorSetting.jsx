import { Check, TuneOutlined } from '@mui/icons-material'
import { Box, Button, FormControl, FormControlLabel, FormLabel, IconButton, Menu, MenuItem, Radio, RadioGroup, Tooltip, Typography } from '@mui/material'
import React, { useContext, useRef } from 'react'
import { ColorModeContext } from '../context/ColorModeContext';

const ColorSetting = () => {
  const colors = ['#00A76F','#5F7CBA','#804BDF'];
  
  const refColor = useRef(null);
  const {setPrimaryColor,primaryColor} = useContext(ColorModeContext);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleColorClick = (color) => {
    setPrimaryColor(color)
  }
  return (
    <>
    <Tooltip title='colores' arrow>
          <IconButton
          onClick={handleClick}
          sx={{fontSize:'20px',color:'text.secondary'}}>
            <TuneOutlined/>
          </IconButton>
    </Tooltip>
    <Menu
     id="solor-settings"
     anchorEl={anchorEl}
     open={open}
     onClose={handleClose}
     transformOrigin={{ horizontal: "right", vertical: "top" }}
     anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
    >
        <Box sx={{display:'flex',flexDirection:'column',gap:1,px:'10px',py:'10px'}}>
        <Typography color='text.secondary'>
          Colores
        </Typography>
        <Box sx={{display:'flex',gap:1}}>
        {
          colors.map((color) => (
            <Box onClick={(e) => setPrimaryColor(color)} key={color} sx={{width:'30px',height:'25px',backgroundColor:color,borderRadius:'5px',display:'flex',justifyContent:'center',alignItems:'center',cursor:'pointer'}}>
              {primaryColor === color ? <Check sx={{color:'#fff',fontSize:'15px'}}/> : ''}
            </Box>
          ))
        }
        </Box>
        </Box>
    </Menu>
    </>
  )
}

export default ColorSetting
