import {React, useEffect, useState} from 'react' 
import '../styles.css'
import { Grid, Stack, Divider, Paper, TextField, Button, styled } from '@mui/material'
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
  const [arrayVal, ] = useState([])
  const [newVal, setNewVal] = useState();
  const [newArr, setNewArr] = useState()
  const takeInputHandler = (e)=>{
    setInput(e.target.value)
    setNewVal(e.target.value)
    console.log("message 2")
  }
  //Material Compoent
  const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(1.5),
    textAlign: 'center',
    width:'50px'
  }));

  useEffect(()=>{
    <Createdmy/>
},[arrayVal])

    //push element
    const insertbtn = ()=>{
      console.log(newVal,"message")
      setNewArr(arrayVal.push(newVal))
      console.log(arrayVal)
      insert(input)
      return(
          <Stack justifyContent='center' direction="row" divider={<Divider orientation="vertical" flexItem />} spacing={1} >
          <Stack direction='row'>
          {arrayVal.map(item=>(
              <Item id='itemId'>{item}</Item>
          ))}
          </Stack>
      </Stack>
      )
  }


const Createdmy=()=>{
   return(
   <Stack justifyContent='left' direction="row" divider={<Divider orientation="vertical" flexItem />} spacing={1} >
           <Stack direction="column-reverse" className='outputSize'>
           {arrayVal.map(item=>(
               <Item id='itemId'>{item}</Item>
           ))}
           </Stack>
       </Stack>
   )
}

const deletedata=()=>{
  
  remove(input)
  console.log('deleted')
 setNewArr(arrayVal.pop())
 
  //  return(
  //      <Stack justifyContent='center' direction="row" divider={<Divider orientation="vertical" flexItem />} spacing={1} >
  //      <Stack direction='row'>
  //      {arrayVal.map(item=>(
  //          <Item id='itemId'>{item}</Item>
  //      ))}
  //      </Stack>
  //  </Stack>
  //  )
}

     return(
     <>
     <div>
     <ThemeProvider theme={theme}>
     <Grid  direction='row' className='mainDiv' container spacing={2}>
            <Grid textAlign='left' className='inputClass'>
      <TextField onChange={takeInputHandler} focused variant='outlined'  label='Insert' size='small' type='number' id='inputdata'> </TextField>
                  <Button variant='contained' id='insertData' onClick={insertbtn}>Go</Button>&nbsp;&nbsp;
                  <TextField onChange={takeInputHandler}  focused variant='outlined'  label='Remove' size='small' type='number' id='inputdata'> </TextField>
                  <Button variant='contained' id='insertData' onClick={deletedata}>go</Button>
                  <Createdmy />
                  </Grid>  
               {/* BST display */}       
               <Grid justifyContent='right'>      
                  <BinarySearchTree data={[]} ref={ref} remove={remove} /></Grid>
                     </Grid></ThemeProvider></div>                    
     </>

   );
     }
    
    
    

export default BST; 