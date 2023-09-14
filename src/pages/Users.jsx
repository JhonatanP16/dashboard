import { PlusOneOutlined } from '@mui/icons-material'
import { Box, Button, Tab, Tabs, Typography } from '@mui/material'
import React, { useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { products, productsColumns } from '../data/products'
import Table from '../components/Table'


const Users = () => {
  const [value, setValue] = React.useState('Todos');
  const [data,setData] = useState(null);
  const handleChange = (e,newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    if(value === 'Todos'){
      setData(products);
    }else{
      setData(products.filter((product) => product.rol === value));
    }
   
  },[value])
  

  return (
    <Box sx={{pt:'80px', pb:'20px',px:'25px',minHeight:'100vh'}}>
        <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center',}}>
        <Typography variant='h6' sx={{marginBottom:'20px',color:'text.primary'}}>
            Usuarios
        </Typography>
        <Link to={`/dashboard/users/add`} style={{textDecoration:'none'}}>
            <Button
            variant="contained"
            startIcon={<PlusOneOutlined/>}
            color='primary'
            sx={{ borderRadius: "10px" }}
            >
              Usuario
            </Button>
        </Link>
        </Box>
        <Box sx={{p:'3px',marginBottom:'15px'}}>
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="text.primary"
            indicatorColor="primary"
            aria-label="secondary tabs example"
          >
            <Tab value='Todos' label="Todos" />
            <Tab value='Estudiante' label="Estudiante" />
            <Tab value="Docente" label="Docente" />
            <Tab value="Admin" label="Admin" />
          </Tabs>
        </Box>
       {
        data && (
          <Table
          data={data}
          fields={productsColumns}
          numberOfRows={data.length}
          enableTopToolBar={true}
          enableBottomToolBar={true}
          enablePagination={true}
          enableRowSelection={true}
          enableColumnFilters={true}
          enableEditing={true}
          enableColumnDragging={true}
          showPreview={true}
          routeLink="users"
          />
        )
       }
      
    </Box>
  )
}

export default Users
