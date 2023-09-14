import styled from '@emotion/styled'
import { CameraEnhance } from '@mui/icons-material';
import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Paper, Select, TextField, Typography } from '@mui/material'
import React, { useRef, useState } from 'react'
import { categories } from '../../data/categories';


const CreateUser = () => {
  const imageInput = useRef(null);
  const [image,setImage] = useState(null);
  const [inputs,setInputs] = useState({
    rol:'',
    sexo:'',
  });
  
  
  const handleChange = (e) => {
    setInputs((prev) => ({...prev,[e.target.name]:e.target.value}))
  };

  const ComponentWrapper = styled(Paper)({
    boxShadow: "none !important",
    borderRadius: "12px",
    height: "100%",
    backgroundImage:'none',
    display:'flex'
  });
  return (
    <Box sx={{pt:'80px', pb:'20px',px:'25px'}}>
        <Typography variant='h6' sx={{marginBottom:'20px',color:'text.primary'}}>
            Crear un nuevo usuario
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={12} lg={4}>
            <ComponentWrapper sx={{
               borderStyle: "solid",
               borderWidth: "1px",
               borderColor: "divider",
               flexDirection:'column',
               alignItems:'center',
               justifyContent:'center',
            }}>
              <input 
                type="file"
                style={{display:'none'}}
                onChange={(e) => setImage(e.target.files[0])}
                ref={imageInput}
              />  
              <Box sx={{
                width:'120px',
                height:'120px',
                display:'flex',
                alignItems:'center',
                justifyContent:'center',
                borderRadius:'50%',
                borderStyle:'dashed',
                borderWidth: "1px",
                borderColor: "primary.main",
                my:2,
                cursor:'pointer'
              }} onClick={() => imageInput.current.click()}>
                {
                  image ? (
                    <img 
                    src={URL.createObjectURL(image)} 
                    alt=""
                    style={{width:'200px',height:'250px'}}
                    />
                  ) : (
                    <Box sx={{display:'flex', flexDirection:'column',justifyContent:'center', alignItems:'center'}}>
                       <CameraEnhance
                      sx={{fontSize:'35px',color:'primary.main'}}
                      />
                      <Typography sx={{ fontSize: "12px", opacity: 0.7, mt:1}}>
                        Cargar Foto
                      </Typography>
                    </Box>
                  )
                }
              </Box>
              <Box>

              </Box>
            </ComponentWrapper>
          </Grid>
          <Grid item xs={12} md={12} lg={8}>
          <ComponentWrapper sx={{
               borderStyle: "solid",
               borderWidth: "1px",
               borderColor: "divider",
            }}>
              <Box sx={{padding:'15px'}}>
                <Typography variant="h5" sx={{mb:'10px'}}>Alumnos</Typography>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                  <TextField id="outlined-basic" label="Nombres" variant="outlined"  fullWidth/>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                  <TextField id="outlined-basic" label="Apellidos" variant="outlined"  fullWidth/>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                  <TextField id="outlined-basic" label="Celular" variant="outlined"  fullWidth/>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                  <TextField id="outlined-basic" label="DNI" variant="outlined"  fullWidth/>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                  <TextField id="outlined-basic" label="Fecha de nacimiento" variant="outlined"  fullWidth/>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                  <TextField id="outlined-basic" label="Correo" variant="outlined"  fullWidth/>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                  <TextField id="outlined-basic" label="Distrito" variant="outlined"  fullWidth/>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                  <TextField id="outlined-basic" label="Dirección" variant="outlined"  fullWidth/>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">Sexo</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Sexo"
                        name='sexo'
                        value={inputs.sexo}
                        onChange={handleChange}
                      >
                        {['Masculino','Femenino'].map((name) => (
                          <MenuItem value={name} key={name}>
                            {name}
                          </MenuItem>
                        ))}
                      </Select>
                  </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">Rol</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Rol"
                        name='rol'
                        value={inputs.rol}
                        onChange={handleChange}
                      >
                        {categories?.map(({ category_id, name }) => (
                          <MenuItem value={name} key={category_id}>
                            {name}
                          </MenuItem>
                        ))}
                      </Select>
                  </FormControl>
                  </Grid>
                </Grid>
                <Box sx={{mt:3, display:'flex',alignItems:'flex-end',justifyContent:'end'}}>
                  <Button variant="contained" sx={{borderRadius:'10px'}}>
                    Crear Usuario
                  </Button>
                </Box>
              </Box>
          </ComponentWrapper>
          </Grid>
        </Grid>
    </Box>
  )
}

export default CreateUser
