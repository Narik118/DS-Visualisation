import {React, useState} from 'react' 
import '../styles.css'
import { Grid, Stack, Divider, ListItem, Paper, TextField, Button } from '@mui/material'
import { styled } from '@mui/material/styles';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const Array = ()=>{

    //Material Compoent
    const Item = styled(Paper)(({ theme }) => ({
        padding: theme.spacing(1.5),
        textAlign: 'center',
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

    const arraySizeInput = (e)=>{
        setArraySize(e.target.value)
    }

    const onCreate=()=>{
        if(arraySize > 10){
            setInvalidInput(true);
        }
        else{
            console.log(arrayValues.length,"entred")
            var txt = tempVal;
            var numb = txt.match(/\d/g);
            numb = numb.join("");
            for(var i=0;i<numb.length;i++){
                values.push(numb[i])
            }
        }
        // else if(arrayValues.length){
        //     setHelperMessage('Enter atlest one value')
        //     setInvalidArrayInput(true)
        // }
        setArrayValues(values)
    }

    const arrayInput=(e)=>{
        if(e.target.value.length > 19 && e.target.value.length<0){
            setInvalidArrayInput(true)
        }
        else{
            setTempVal(e.target.value);
        }

    }



    return(
        <div>
        <Grid  direction='row' className='mainDiv' >
            <Grid textAlign='center' className='inputClass'>
                <TextField variant='outlined' id='inputId' label='Enter size' size='small' onChange={arraySizeInput} type='number' error={invalidInput} helperText='Enter value less than 10'> </TextField> 
                <TextField variant='outlined' id='inputId' label='Enter values' size='small' onChange={arrayInput} error={invalidArrayInput} helperText={helperMessage}> </TextField>
                <Button variant='contained' id='createId' onClick={onCreate}>
                    <NavigateNextIcon/>
                </Button>

            </Grid>

            <Grid> <Stack justifyContent='center' direction="row" divider={<Divider orientation="vertical" flexItem />} spacing={1} >
                <Stack direction='row'>
                {arrayValues.map(item=>(
                    <Item>{item}</Item>
                ))}
                </Stack>
            </Stack></Grid>
        </Grid>
        </div>
    )
}

export default Array; 


