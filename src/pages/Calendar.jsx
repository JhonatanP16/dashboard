import { Box, Paper, Typography } from '@mui/material'
import React from 'react'
import Horario from '../components/calendar/Horario'

const Calendar = () => {
  return (
    <Box sx={{pt:'80px', pb:'20px',px:'25px',minHeight:'100vh'}}>
        <Typography variant='h6'>Calendario Academico</Typography>
        <Box sx={{mt:'10px',paddingBottom:'10px'}}>
        <Paper
              sx={{
                boxShadow: "none !important",
                borderRadius: "12px",
                borderStyle: "solid",
                borderWidth: "1px",
                borderColor: "divider",
                height: "100%",
                backgroundImage:'none',
              }}>
                <Horario/>
        </Paper>
        </Box>
    </Box>
  )
}

export default Calendar
