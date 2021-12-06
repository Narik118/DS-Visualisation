import {React, useEffect, useState} from 'react' 
import '../styles.css'
import { Grid, Stack, Divider, Paper, TextField, Button } from '@mui/material'
 import { createMuiTheme, ThemeProvider,} from '@mui/material';
import { BinarySearchTree, useTree } from 'react-tree-vis'
 //import AlertNotify from './Alert';
const theme =  createMuiTheme({
  palette:{
      primary:{
          main:'#f6f6f6'
      } 
  },
})
  
function BST(){

  const [input, setInput] = useState('');
  const { ref, insert, remove } = useTree()
  const takeInputHandler = (e)=>{
    setInput(e.target.value)
  }
  
  function insertbtn(){
    // const BST = document.getElementById("insertData").Value;
    // console.log(BST.Value);
    insert(input)
    console.log(input)
  }
 
     return(
     <>
     <div>
     <ThemeProvider theme={theme}>
     <Grid  direction='row' className='mainDiv' container >
            <Grid textAlign='left' className='inputClass'>
      <TextField onChange={takeInputHandler} focused variant='outlined'  label='Insert' size='small' type='number'> </TextField>
                  <Button variant='contained' id='insertData' onClick={insertbtn}>INSERT</Button>
                  <BinarySearchTree data={[]} ref={ref} />
                
                 </Grid> </Grid></ThemeProvider></div>
     </>

   );
 }
     
    
    

export default BST; 


