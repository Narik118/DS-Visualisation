import {React, useEffect, useState} from 'react'
import '../styles.css'
import { Button, Grid, Card, CardMedia } from '@mui/material'
import home from '../images/home.jpg'
import { makeStyles, styled } from '@mui/styles';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { createMuiTheme, ThemeProvider } from '@mui/material';

const theme =  createMuiTheme({
    palette:{
        primary:{
            main:'#f6f6f6'
        } 
    },
})

const Home = () =>{
    return(
        <div id="landingGrid" className="homePage">
            <ThemeProvider theme={theme}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} >
                    <h1 className="textSize">The React UI library you always wanted</h1>
                    <h3 className="homeAdjust">MUI provides a robust, customizable, and accessible library of foundational and advanced components, enabling you to build your own design system and develop React applications faster.</h3>
                    <Button variant="contained" href="/Dslist" id="createId" endIcon={<NavigateNextIcon />}>Visualize</Button>
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