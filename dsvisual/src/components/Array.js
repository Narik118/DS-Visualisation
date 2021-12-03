import {React, useEffect, useState} from 'react' 
import '../styles.css'
import { Grid, Stack, Divider, Paper, TextField, Button, Alert, Snackbar } from '@mui/material'
import { makeStyles, styled } from '@mui/styles';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { createMuiTheme, ThemeProvider } from '@mui/material';
import AlertNotify from './Alert';


const theme =  createMuiTheme({
     palette:{
         primary:{
             main:'#f6f6f6'
         } 
     },
     overrides:{

     }
})

const useStyles = makeStyles(theme=>({
    textFeild:{
        color:'#f6f6f6'
    }
}))

const Array = ()=>{
    const classes = useStyles();

    //Material Compoent
    const Item = styled(Paper)(({ theme }) => ({
        padding: theme.spacing(1),
        textAlign: 'center',
        width:'50px',
        marginLeft:'3px'
      }));


    //Validations states
    const [invalidInput, setInvalidInput] = useState(false)
    const [invalidArrayInput, setInvalidArrayInput] = useState(false)
    const [helperMessage, setHelperMessage] = useState('Enter array values [1,2,3,4]')


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
            var txt = tempVal;
            var numb = txt.match(/\d/g);
            numb = numb.join("");
            for(var i=0;i<numb.length;i++){
                values.push(numb[i])
            }
                if(Number(arraySize)+1 === values.length){
                    setArrayValues(values)
                }
                else{
                    setInvalidInput(true)
                    setInvalidArrayInput(true)
                    console.log("array size")
                    // alert("Array size is not equal to array values")
                    // setSeverityLevel('error')
                    // setALertMess("Array size is not equal to array values")

                    // setOpen(true)

                }
        }
        else if(tempVal === undefined){
            console.log("empty array ")
            // setSeverityLevel('error')
            // setALertMess("Empty Array")
            // setOpen(true)
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

    //pop function
    const popFunction=()=>{

        arrayValues.pop()
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


    //create the initial array
    const CreateArray=()=>{
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

    //ALert message function
    const AlertNotification=()=>{
        return(
            <AlertNotify obj={{alertMess:'Empty Array', alertLevel:'error', open:true}} ></AlertNotify>
        )
    }

    return(
        <div>
        <ThemeProvider theme={theme}>
            <Grid container>

                <Grid item xs={12} md={6} direction='column' alignItems="center"  className='inputClass'>
                    <TextField variant='outlined' color='primary' focused className={classes.textFeild} id='inputId' label='Enter size' size='small' onChange={arraySizeInput} type='number' error={invalidInput} helperText='Enter value less than 10'> </TextField> 
                    <TextField variant='outlined' id='inputId' focused label='Enter values' size='small' onChange={arrayInput} error={invalidArrayInput} helperText={helperMessage}> </TextField>
                    <Button variant='contained' id='createId' onClick={onCreate}>
                        <NavigateNextIcon/>
                    </Button>
                 </Grid>

                <Grid item xs={12} md={6}> 
                    <h1>Something here</h1>
                    <CreateArray/>
                </Grid>

                <Grid item xs={12} md={6}> 
                    <h1>Something here</h1>
                </Grid>

                <Grid item xs={12} md={6}> 
                    <h1>Something here</h1>
                    {invalidInput ? <AlertNotification/> : <h1>nothing here</h1>}
                </Grid>

            </Grid>

        <Button onClick={popFunction}>array.pop()</Button>
        </ThemeProvider>
        </div>
    )
}

export default Array; 


