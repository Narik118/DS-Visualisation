import { Button, Card, CardActions, CardMedia, CardContent, Grid, Typography } from '@mui/material';
import React from 'react' 
import arr from '../images/arrayDS.jpg'
import { createMuiTheme, ThemeProvider } from '@mui/material';
import '../styles.css'

const LandingPage = ()=>{

    const theme =  createMuiTheme({
        palette:{
            primary:{
                main:'#212121'  
            },
            secondary:{
                main:'#f6f6f6'
            }
        },
        typography:{
            fontFamily:'Lato',
        },
        overrides:{
            MuiCardMediaRoot:{
                objectFit:'fill'
            }
        }
    })

    return(
        <div>
            <ThemeProvider theme={theme}>
        <Grid container rowSpacing={2} columnSpacing={2} justifyContent='space-around' alignItems='center' id='landingGrid'>


            <Grid item xs={12} sm={4} md={4}>
                <Card >
                <CardMedia 
                    component="img"
                    height="150"
                    image={arr}
                    alt="array imgage"
                    sx={{
                        objectFit:'fill'
                    }}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" id="boldText" component="div">
                    Array
                    </Typography>
                    <Typography variant="body2" >
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button href='Array' variant='contained' id="lighBoldText" size="small">Visualise</Button>
                </CardActions>
                </Card>
            </Grid>


            <Grid item xs={12} sm={4} md={4}>
                 <Card >
                <CardMedia sx={{ maxWidth: 345 }}
                    component="img"
                    height="150"
                    image={arr}
                    alt="array imgage"
                    sx={{
                        objectFit:'fill'
                    }}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" id="boldText" component="div">
                    Stack
                    </Typography>
                    <Typography variant="body2" >
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button href='Array' variant='contained' id="lighBoldText" size="small">Visualise</Button>
                </CardActions>
                </Card>
            </Grid>


            <Grid item xs={12} sm={4} md={4}>
                 <Card >
                <CardMedia sx={{ maxWidth: 345 }}
                    component="img"
                    height="150"
                    image={arr}
                    alt="array imgage"
                    sx={{
                        objectFit:'fill'
                    }}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" id="boldText" component="div">
                    Queue
                    </Typography>
                    <Typography variant="body2" >
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button href='Array' variant='contained' id="lighBoldText" size="small">Visualise</Button>
                </CardActions>
                </Card>
            </Grid>


            <Grid item xs={12} sm={4} md={4}>
                 <Card >
                <CardMedia sx={{ maxWidth: 345 }}
                    component="img"
                    height="150"
                    image={arr}
                    alt="array imgage"
                    sx={{
                        objectFit:'fill'
                    }}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" id="boldText" component="div">
                    Binary Search Tree
                    </Typography>
                    <Typography variant="body2" >
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button href='Array' variant='contained' id="lighBoldText" size="small">Visualise</Button>
                </CardActions>
                </Card>
            </Grid>


            <Grid item xs={12} sm={4} md={4}>
                 <Card >
                <CardMedia sx={{ maxWidth: 345 }}
                    component="img"
                    height="150"
                    image={arr}
                    alt="array imgage"
                    sx={{
                        objectFit:'fill'
                    }}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" id="boldText" component="div">
                    Array
                    </Typography>
                    <Typography variant="body2" >
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button href='Array'  variant='contained' id="lighBoldText" size="small">Visualise</Button>
                </CardActions>
                </Card>
            </Grid>


            <Grid item xs={12} sm={4} md={4}>
                <Card >
                <CardMedia sx={{ maxWidth: 345 }}
                    component="img"
                    height="150"
                    image={arr}
                    alt="array imgage"
                    sx={{
                        objectFit:'fill'
                    }}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" id="boldText" component="div">
                    Array
                    </Typography>
                    <Typography variant="body2" >
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button href='Array' variant='contained' id="lighBoldText" size="small">Visualise</Button>
                </CardActions>
                </Card>
            </Grid>


        </Grid>   
        </ThemeProvider>
        </div>
    )
}

export default LandingPage;