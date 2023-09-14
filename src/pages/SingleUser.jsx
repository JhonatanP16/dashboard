import { Box, Chip, Grid, Paper, Rating, Typography } from '@mui/material'
import React from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../data/products';

const SingleUser = () => {
  const {id} = useParams();
  const user = products.find((user) => user.id === Number(id));
  console.log(user);

  return (
    <Box sx={{pt:'80px', pb:'20px',px:'25px', minHeight:'100vh'}}>
        <Typography variant='h6' sx={{marginBottom:'20px',color:'text.primary'}}>Detalles de usuario</Typography>
        <Paper
        sx={{
          boxShadow: "none !important",
          borderRadius: "12px",
          borderStyle: "solid",
          borderWidth: "1px",
          borderColor: "divider",
          height: "100%",
          backgroundImage:'none',
          p:'20px'
        }}
      >
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={4}>
            <img
              src={user.image}
              alt={user.nombres}
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={8}>
            <Typography variant="h5" sx={{marginBottom:'20px',color:'text.secondary'}}>{user.nombres} {user.apellidos}</Typography>
            <Typography variant="subtitle2">{user.short_description}</Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: 4, my: 2 }}>
              <Typography variant="subtitle2">DNI</Typography>
              <Chip label={user.dni} />
            </Box>
            
            <Box sx={{ display: "flex", alignItems: "center", gap: 4, my: 2 }}>
              <Typography variant="subtitle2">Correo</Typography>
              <Chip label={user.correo} />
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 4, my: 2 }}>
              <Typography variant="subtitle2">Rol</Typography>
              <Chip
                label={user.rol}
                color={user.rol === 'Admin' ? "success" : "error"}
              />
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 4, my: 2 }}>
              <Typography variant="subtitle2">Estado</Typography>
              <Chip
                label={user.estado ? 'Activo' : 'Desactivo'}
                color={user.estado === 'Admin' ? "success" : "error"}
              />
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  )
}

export default SingleUser
