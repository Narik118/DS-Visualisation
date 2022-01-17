import {React, useEffect, useState} from 'react'
import '../styles.css'
import { Button, Grid, Typography } from '@mui/material'
import { createMuiTheme, ThemeProvider } from '@mui/material';
import CodeCopy from '../images/CodeCopy.png'

const theme =  createMuiTheme({
    palette:{
        primary:{
            main:'#212121'
        } 
    },
    typography:{
        h1:{
            fontSize:'55px',
            fontWeight:'550'
        },
        fontFamily:'Lato'
    }
})

const Home = () =>{
    return(
        <div id="landingGrid" className="homePage">
            <ThemeProvider theme={theme}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <Typography variant='h6' color='primary' fontWeight='bold'>&lt;ds&gt;</Typography>
                    {/* <br/> */}
                    <Typography variant='h1' color='primary' className="textSize">Learn data structures visually <span></span> </Typography>
                    {/* <br/> */}
                    <Typography variant='h6'color='primary' fontWeight='bold'>&lt;/ds&gt;</Typography>
                    {/* <Typography className="homeAdjust">MUI provides a robust, customizable, and accessible library of foundational and advanced components, enabling you to build your own design system and develop React applications faster.</Typography> */}
                    <Button variant='contained' href="/Dslist" className="getStarted" >Get Started </Button>
                </Grid>
                <Grid item xs={12} sm={6} className='homeImg'>
                    <img id="homeImgId" src={CodeCopy}></img>
                </Grid>
            </Grid>
            </ThemeProvider>
        </div>
    )

}
export default Home