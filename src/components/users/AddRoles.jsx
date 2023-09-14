import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material'
import React from 'react'

const AddRoles = ({open,handleClose}) => {
  return (
    <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Agregar Role</DialogTitle>
        <DialogContent>
        <Box sx={{width:'500px',display:'flex',flexDirection:'column',gap:'20px'}}>
        <TextField
            autoFocus
            margin="none"
            id="category"
            label="Nombre"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            margin="none"
            id="number"
            label="Descripción"
            type="text"
            fullWidth
            variant="standard"
          />
          </Box>
        </DialogContent>
        <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleClose} variant='contained'>Agregar</Button>
        </DialogActions>
    </Dialog>
  )
}

export default AddRoles
