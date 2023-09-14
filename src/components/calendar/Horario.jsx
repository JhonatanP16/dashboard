import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import { Box } from '@mui/material'
import './horario.css'
import React from 'react'
const Horario = () => {
  const events = [
    { title: 'Meeting', start: new Date() },
    { title: 'Concierto por la graduacion de los chicos de inge de sistemas d e nuestra casa mayori alma mater  ingenieria de sistemas de la UNCP', start: '2023-09-13 06:00:00' }
  ]
  console.log(FullCalendar);
  return (
    <Box sx={{padding:'15px'}}>
        <FullCalendar
          plugins={[dayGridPlugin,timeGridPlugin]}
          headerToolbar={false}
          initialView='timeGridWeek'
          selectable={true}
          editable={true}
          weekends={false}
          slotMinTime='06:00:00'
          events={events}
          dayHeaderContent={(arg) => {
            // Mapea los nombres de los días de la semana como desees
            const customDayNames = {
              0: 'Domingo',
              1: 'Lunes',
              2: 'Martes',
              3: 'Miércoles',
              4: 'Jueves',
              5: 'Viernes',
              6: 'Sábado',
            };
    
            return customDayNames[arg.date.getDay()];
          }}
          eventContent={renderEventContent}
        />
    </Box>
  )
}
function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <p className='parrafo'>{eventInfo.event.title}</p>
    </>
  )
}

export default Horario
