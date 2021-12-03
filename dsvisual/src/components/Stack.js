import {React, useEffect, useState} from 'react' 
import '../styles.css'
import { Grid, Stack, Divider, Paper, TextField, Button,} from '@mui/material'
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

const useStyles = makeStyles(theme=>({
    textFeild:{
        color:'#f6f6f6'
    }
}))

const Stacks = ()=>{
    const classes = useStyles();

    //Material Compoent
    const Item = styled(Paper)(({ theme }) => ({
        padding: theme.spacing(1.5),
        textAlign: 'center',
        width:'50px'
      }));


    //Validations states
    const [invalidInput, setInvalidInput] = useState(false)
    const [invalidStackInput, setInvalidStackInput] = useState(false)
    const [helperMessage, setHelperMessage] = useState('Enter stack values 1,2,3,4')


    //state variables for actions
    const [stackSize, setStackSize] = useState();
    const [tempVal, setTempVal] = useState();
    const [stackValues, setStackValues] = useState([])
    const [newVal, setNewVal] = useState();
    const values = []


    useEffect(()=>{
        <CreateStack/>
    },[stackValues])

    const stackSizeInput = (e)=>{
        setStackSize(e.target.value)
    }

    const onCreate=()=>{
        if(tempVal !== undefined &&tempVal.length !== undefined){
            console.log("entred here")
            var txt = tempVal;
            var numb = txt.match(/\d/g);
            numb = numb.join("");
            for(var i=0;i<numb.length;i++){
                values.push(numb[i])
            }
                if(Number(stackSize) === values.length){
                    setStackValues(values)
                }
                else{
                    alert("Stack size is not equal to stack values")
                    setInvalidInput(true)
                    setInvalidStackInput(true)
                }
        }
        else if(tempVal === undefined){
            alert("Empty stack")
        }
        else if(stackSize > 10){
            setInvalidInput(true);
        }


    }

    const stackInput=(e)=>{
        if(e.target.value.length > 19){
            setInvalidStackInput(true)
        }
        else if(e.target.value.length>0){
            setTempVal(e.target.value);
        }

    }
    const pushInputValue = (e)=>{
        setNewVal(e.target.value)
        console.log("message 2")
    }

    const [newStk, setNewStk] = useState()
    //push function
    const pushInput = ()=>{
        console.log(newVal,"message")
        setNewArr(arrayValues.push(newVal))
        console.log(arrayValues)
        
        return(
            <Stack justifyContent='center' direction="row" divider={<Divider orientation="vertical" flexItem />} spacing={1} >
            <Stack direction='row'>
            {stackValues.map(item=>(
                <Item id='itemId'>{item}</Item>
            ))}
            </Stack>
        </Stack>
        )
    }
    //pop function
    const popFunction=()=>{
        setNewStk(stackValues.pop())
        return(
            <Stack justifyContent='center' direction="row" divider={<Divider orientation="vertical" flexItem />} spacing={1} >
            <Stack direction='row'>
            {stackValues.map(item=>(
                <Item id='itemId'>{item}</Item>
            ))}
            </Stack>
        </Stack>
        )
    }
    //peek function
    const peekFunction=()=>{
        if(stackValues.length == 0){
            alert("Stack is Empty")
        }
        else{
             var lastElement = stackValues[stackValues.length -1]
             alert(`Element at top of the Stack is ${lastElement}`)
           // for(var i=0;i<=arrayValues.length)
        }

    }
    //Empty function
    const emptyFunction=()=>{
        if(stackValues.length == 0){
            alert("Stack is Empty")
        }
        else if(stackValues.length != null){
            console.log(stackValues)
            alert("Stack is Full")
        }
    }


    const CreateStack=()=>{
        return(
        <Stack justifyContent='center' direction="row" divider={<Divider orientation="vertical" flexItem />} spacing={1} >
                <Stack direction="column-reverse" className='outputSize'>
                {stackValues.map(item=>(
                    <Item id='itemId'>{item}</Item>
                ))}
                </Stack>
            </Stack>
        )
    }

    return(
        <div>
            <ThemeProvider theme={theme}>
        <Grid  direction='row' className='mainDiv' container >
            <Grid textAlign='left' className='inputClass'>
                <Stack direction="row" spacing={3}>
                  <TextField variant='outlined' className={classes.textFeild} id='inputId' label='Enter size' size='small' onChange={stackSizeInput} type='number' error={invalidInput} helperText='Enter value less than 10'> </TextField> 
                  <TextField variant='outlined' id='inputId' label='Enter values' size='small' onChange={stackInput} error={invalidStackInput} helperText={helperMessage}> </TextField>
                  <Button variant='contained' id='createId' onClick={onCreate}>
                    <NavigateNextIcon/>
                  </Button>
                  <TextField variant='outlined' className={classes.textFeild} id='inputId' label='Enter value' size='small' type='number' error={invalidInput} onChange={pushInputValue}> </TextField>
                  <Button variant='contained' id='createId' onClick={pushInput}>PUSH</Button>
                  <Button variant='contained' id='createId' onClick={popFunction}>POP</Button>
                  <Button variant='contained' id='createId' onClick={peekFunction}>PEEK</Button>
                  <Button variant='contained' id='createId' onClick={emptyFunction}>Empty</Button>
                </Stack>
            </Grid>
                <CreateStack/>
        </Grid>
        </ThemeProvider>
        </div>
    )
}

export default Stacks; 