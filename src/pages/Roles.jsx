import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import Table from '../components/Table'
import { rolesColumns, rolesData } from '../data/roles'
import { PlusOneOutlined } from '@mui/icons-material'
import AddRoles from '../components/users/AddRoles'
import { useState } from 'react'

const Roles = () => {
  const [open,setOpen] = useState(false);
  const handleClose = () => {setOpen(false)};
  const handleClick = () => {setOpen(true)};
  return (
    <Box sx={{pt:'80px', pb:'20px',px:'25px',minHeight:'100vh'}}>
      <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:'16px'}}>
        <Typography variant='h6'>Roles</Typography>
        <Button variant='contained' sx={{borderRadius:'10px'}} startIcon={<PlusOneOutlined/>} onClick={handleClick}>
          Role
        </Button>
      </Box>
      <AddRoles open={open} handleClose={handleClose}/>
      <Table
        fields={rolesColumns}
        data={rolesData}
        numberOfRows={rolesData.length}
        enableTopToolBar={false}
        enableBottomToolBar={false}
        enablePagination={false}
        enableRowSelection={false}
        enableColumnFilters={false}
        enableEditing={false}
        enableColumnDragging={false}
        showPreview={false}
        routeLink="roles"
      />
    </Box>
  )
}

export default Roles
