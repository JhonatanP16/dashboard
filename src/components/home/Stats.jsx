import styled from '@emotion/styled'
import { Box, Grid, IconButton, Paper, Typography } from '@mui/material'
import React from 'react'
import { stats } from '../../data/stats'

const Stats = () => {
    const Item = styled(Paper)({
        padding:'5px 10px',
        borderRadius:'12px',
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        boxShadow:'none',
        backgroundImage:'none',
        borderStyle: "solid",
        borderWidth: "1px",
        borderColor: "divider",
    })
  return (
    <Grid container spacing={2}>
        {stats?.map((stat,i) => (
            <Grid
            item
            xs={12}
            sm={i === stats.length - 1 ? 12 : 6}
            lg={4}
            key={i}
            >
            <Item
            sx={{
                borderStyle: "solid",
                borderWidth: "1px",
                borderColor: "divider",
              }}>
                <Box
                sx={{flex:1,display:'flex',alignItems:'center',justifyContent:'center'}}
                >
                    <IconButton
                    sx={{background:`${stat.iconBg} !important`,color:stat.iconColor,transform:'scale(1.8)'}}>
                        {stat.icon}
                    </IconButton>
                   
                </Box>
                <Box
                sx={{flex:2}}
                >
                     <Typography variant='h4' sx={{my:2}}>
                        {stat.amount}
                    </Typography>
                    <Typography sx={{opacity:0.7}}>
                        {stat.title}
                    </Typography>
                </Box>
            </Item>
            </Grid>
        ))}
    </Grid>
  )
}

export default Stats
