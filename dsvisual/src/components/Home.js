import {React, useEffect, useState} from 'react'
import '../styles.css'
import { Button, Grid, Card, CardMedia, Typography } from '@mui/material'
import home from '../images/Array.png'
import Bstfun from '../images/Bstfun.png'
import Stackfun from '../images/Stackfun.png'
// import { makeStyles, styled } from '@mui/styles';
// import { Button, Grid, Card, CardMedia } from '@mui/material'
// import home from '../images/home.jpg'
import { makeStyles, styled } from '@mui/styles';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { createMuiTheme, ThemeProvider } from '@mui/material';

const theme =  createMuiTheme({
    palette:{
        primary:{
            main:'#f6f6f6'
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
                    <Typography variant='h6' fontWeight='bold'>&lt;ds&gt;</Typography>
                    {/* <br/> */}
                    <Typography variant='h1' className="textSize">Learn data structures visually <span></span> </Typography>
                    {/* <br/> */}
                    <Typography variant='h6' fontWeight='bold'>&lt;/ds&gt;</Typography>
                    {/* <Typography className="homeAdjust">MUI provides a robust, customizable, and accessible library of foundational and advanced components, enabling you to build your own design system and develop React applications faster.</Typography> */}
                    {/* <Button variant="contained" href="/Dslist" id="createId" endIcon={<NavigateNextIcon />}>Visualize</Button> */}
                </Grid>

                {/* scrolling bar */}
                <Grid item xs={12} sm={6}>
                    <Card>
                      <main>
                        <div className='scroll-bg'>
                            <div className='scroll-div'>
                                <div className='scroll-object'>
                                <div className='img'><img src={Bstfun} alt="per1" /></div>                                                                              
                                <div className='img'><img src={Stackfun} alt="per1" /></div>                                                                              

                                    
                                </div>
                            </div>
                        </div>
                                    </main>
                    </Card>
                </Grid>
            </Grid>
            </ThemeProvider>
        </div>
    )

}
export default Home