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
    const [invalidArrayInput, setInvalidArrayInput] = useState(false)
    const [helperMessage, setHelperMessage] = useState('Enter stack values 1,2,3,4')


    //state variables for actions
    const [arraySize, setArraySize] = useState();
    const [tempVal, setTempVal] = useState();
    const [arrayValues, setArrayValues] = useState([])
    const values = []


    useEffect(()=>{
        <CreateArray/>
    },[arrayValues])

    const arraySizeInput = (e)=>{
        setArraySize(e.target.value)
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
                if(Number(arraySize) === values.length){
                    setArrayValues(values)
                }
                else{
                    alert("Stack size is not equal to stack values")
                    setInvalidInput(true)
                    setInvalidArrayInput(true)
                }
        }
        else if(tempVal === undefined){
            alert("Empty stack")
        }
        else if(arraySize > 10){
            setInvalidInput(true);
        }


    }

    const arrayInput=(e)=>{
        if(e.target.value.length > 19){
            setInvalidArrayInput(true)
        }
        else if(e.target.value.length>0){
            setTempVal(e.target.value);
        }

    }
    const pushInputValue = (e)=>{
        setNewArr(arrayValues.push(e.target.value))
        console.log("message 2")
    }

    const [newArr, setNewArr] = useState()
    //push function
    const pushInput = (e)=>{
        console.log(e.target.value,"message")
        
        return(
            <Stack justifyContent='center' direction="row" divider={<Divider orientation="vertical" flexItem />} spacing={1} >
            <Stack direction='row'>
            {arrayValues.map(item=>(
                <Item id='itemId'>{item}</Item>
            ))}
            </Stack>
        </Stack>
        )
    }
    //pop function
    const popFunction=()=>{
        setNewArr(arrayValues.pop())
        return(
            <Stack justifyContent='center' direction="row" divider={<Divider orientation="vertical" flexItem />} spacing={1} >
            <Stack direction='row'>
            {arrayValues.map(item=>(
                <Item id='itemId'>{item}</Item>
            ))}
            </Stack>
        </Stack>
        )
    }
    //peek function
    const peekFunction=()=>{
        if(arrayValues.length == 0){
            alert("Stack is Empty")
        }
        else{
             var lastElement = arrayValues[arrayValues.length -1]
             alert(`Element at top of the Stack is ${lastElement}`)
           // for(var i=0;i<=arrayValues.length)
        }

    }
    //Empty function
    const emptyFunction=()=>{
        if(arrayValues.length == 0){
            alert("Stack is Empty")
        }
        else if(arrayValues.length != null){
            console.log(arrayValues)
            alert("Stack is Full")
        }
    }


    const CreateArray=()=>{
        return(
        <Stack justifyContent='center' direction="row" divider={<Divider orientation="vertical" flexItem />} spacing={1} >
                <Stack direction="column-reverse" className='outputSize'>
                {arrayValues.map(item=>(
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
                  <TextField variant='outlined' className={classes.textFeild} id='inputId' label='Enter size' size='small' onChange={arraySizeInput} type='number' error={invalidInput} helperText='Enter value less than 10'> </TextField> 
                  <TextField variant='outlined' id='inputId' label='Enter values' size='small' onChange={arrayInput} error={invalidArrayInput} helperText={helperMessage}> </TextField>
                  <Button variant='contained' id='createId' onClick={onCreate}>
                    <NavigateNextIcon/>
                  </Button>
                  <TextField variant='outlined' className={classes.textFeild} id='inputId' label='Enter value' size='small' type='number' error={invalidInput} onChange={pushInputValue}> </TextField>
                  <Button variant='contained' id='createId' onClick={pushInput}>PUSH</Button>
                  <Button variant='contained' id='createId' onClick={popFunction}>POP</Button>
                  <Button variant='contained' id='createId' onClick={peekFunction}>PEEK</Button>
                  <Button variant='contained' id='createId' onClick={emptyFunction}>Is Empty</Button>
                </Stack>
            </Grid>
                <CreateArray/>
        </Grid>
        </ThemeProvider>
        </div>
    )
}

export default Stacks; 