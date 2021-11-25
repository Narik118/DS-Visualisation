import React from 'react'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Input from '@mui/material/Input';
//import Item from '@mui/material/ListItem'
import '../styles.css'

const Stackk = ()=>{
    return(
        <div>
          <h1>Stack</h1>
          <div className="bgColor">
           <Stack direction="row" spacing={2}>
             <Input className="whiteColor navSize"></Input>
             <Button variant="contained" className="navSize">Push</Button>
             <Button variant="contained" className="navSize">Pop</Button>
           </Stack>
          </div>
        </div>  
    )
}

export default Stackk; 