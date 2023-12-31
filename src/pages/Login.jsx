import { LockOutlined } from '@mui/icons-material';
import { Avatar, Box, Button, Checkbox, CssBaseline, FormControlLabel, Grid, Link, Paper, TextField, Typography } from '@mui/material'
import Ilustracion from '../assets/ilustracion_login.png';
import React from 'react'

const Login = () => {
  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            display:{xs: "none", sm: "flex"},
            flexDirection:'column',
            justifyContent:'center',
          }}
        >
            <Typography variant="h4" sx={{ px: 5, mt: 2, mb: 5, fontWeight:'bold',color:'text.secondary'}}>
              Hola, Bienvenido
            </Typography>
            <Box>
            <img src={Ilustracion} alt="" />
            </Box>
        </Grid>
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{bgcolor: 'primary.main',color:'#fff'}}/>
            <Typography component="h1" variant="h5">
              Login
            </Typography>
            <Box component="form" noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Correo Electronico"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Contraseña"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Recordarme"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Iniciar sesión
              </Button>
              <Box  sx={{display:'flex', justifyContent:'center', marginTop:'2rem'}}>
                <Link href="#" variant="body2">
                    Olvido su contraseña
                </Link>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
  )
}

export default Login
