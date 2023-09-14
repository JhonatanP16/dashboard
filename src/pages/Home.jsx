import styled from '@emotion/styled'
import { Box, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import Stats from '../components/home/stats';
import BarChart from '../components/home/chart/BarChart';
import TopCountries from '../components/home/TopCountries';

const Home = () => {
  const ComponentWrapper = styled(Box)({
    marginTop:'10px',
    paddingBottom:'10px',
  });
  return (
    <Box sx={{pt:'80px', pb:'20px',px:'25px'}}>
      <Typography variant='h6' sx={{marginBottom:'20px'}}>
        Home
      </Typography>
      <ComponentWrapper>
        <Stats/>
      </ComponentWrapper>
      <ComponentWrapper>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={8}>
            <BarChart/>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Paper
              sx={{
                boxShadow: "none !important",
                borderRadius: "12px",
                borderStyle: "solid",
                borderWidth: "1px",
                borderColor: "divider",
                height: "100%",
                backgroundImage:'none',
              }}
            >
              <TopCountries/>
            </Paper>
          </Grid>
        </Grid>
      </ComponentWrapper>
    </Box>
  )
}

export default Home
