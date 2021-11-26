import {React, useEffect, useState} from 'react' 
import '../styles.css'
import { Grid, Stack, Divider, Paper, TextField, Button } from '@mui/material'
import { makeStyles, styled } from '@mui/styles';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { createMuiTheme, ThemeProvider } from '@mui/material';


const theme =  createMuiTheme({
     palette:{
         primary:{
             main:'#ff6600'
         }
     },
})

const useStyles = makeStyles(theme=>({
    textFeild:{
        borderColor:'orange'
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

    const [newArr, setNewArr] = useState()
    //pop function
    const popFunction=()=>{
        console.log(arrayValues.pop())

        setNewArr(arrayValues.pop())
        return(
            <Stack justifyContent='center' direction="row" divider={<Divider orientation="vertical" flexItem />} spacing={1} >
            <Stack direction='row'>
            {newArr.map(item=>(
                <Item id='itemId'>{item}</Item>
            ))}
            </Stack>
        </Stack>
        )
    }


    const CreateArray=()=>{
        return(
        <Stack justifyContent='center' direction="row" divider={<Divider orientation="vertical" flexItem />} spacing={1} >
                <Stack>
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
        <Grid  direction='row' className='mainDiv' >
            <Grid textAlign='center' className='inputClass'>
                <TextField variant='outlined' className={classes.textFeild} id='inputId' label='Enter size' size='small' onChange={arraySizeInput} type='number' error={invalidInput} helperText='Enter value less than 10'> </TextField> 
                <TextField variant='outlined' id='inputId' label='Enter values' size='small' onChange={arrayInput} error={invalidArrayInput} helperText={helperMessage}> </TextField>
                <Button variant='contained' id='createId' onClick={onCreate}>
                    <NavigateNextIcon/>
                </Button>

            </Grid>

            <Grid> 
                <CreateArray/>
            </Grid>
        </Grid>
        <Button onClick={popFunction} color='primary'>Stack.pop()</Button>
        <Button onClick={popFunction}>Stack.push()</Button>
        </ThemeProvider>
        </div>
    )
}

export default Stacks; 