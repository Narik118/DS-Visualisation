import {React, useEffect, useState} from 'react'
import '../styles.css'
<<<<<<< HEAD
import { Button, Grid, Card, CardMedia, Typography } from '@mui/material'
import home from '../images/Array.png'
import { makeStyles, styled } from '@mui/styles';
=======
import { Button, Grid, Card, CardMedia } from '@mui/material'
import home from '../images/home.jpg'
>>>>>>> 61015c70c06e319b7e89652e9fe23695c3fd3a1a
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
                <Grid item xs={12} sm={6}>
                    <Card>
                       <CardMedia 
                         component="img"
                         height="350"
                         image={home}
                         alt="Home imgage"
                         sx={{
                         objectFit:'fill'
                         }}
                        />
                    </Card>
                </Grid>
            </Grid>
            </ThemeProvider>
        </div>
    )

}
export default Home