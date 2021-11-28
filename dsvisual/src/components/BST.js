import {React, useEffect, useState} from 'react' 
import '../styles.css'
import { Grid, Stack, Divider, Paper, TextField, Button } from '@mui/material'
import { makeStyles, styled } from '@mui/styles';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { createMuiTheme, ThemeProvider,} from '@mui/material';
import {BinarySearchTreeNode, VisualizationType, drawBinaryTree, BinaryTreeNode,} from 'binary-tree-visualizer';
import { setTheme } from 'binary-tree-visualizer';

 setTheme({
     radius :25,
     leafNodeSpace :90,
     lineHeight: 120,
     strokeColor:'#43eb34',
     growthAndShrinkTimes: 1.25,
     colorArray: [{
         borderColor: "#43eb34",
         bgColor:'#ffedfb',
  }],


 });

//  class BST{
//     constructor(value){
//    if(this.value== value){
//    return;
//    }
   
//     if (value < this.value){
//    if (this.left){
//    this.left.insert(value);
//    return;
//    }
//    if(this.right){
//    this.right.insert(value);
//    return;
//    }
//    this.setRight(new BSTNode(value));
//    }
//    }}
 //Trees implimentation :)----------:(
const root = new BinarySearchTreeNode(100); //Root node
root.insert(50);
root.insert(40);
root.insert(110);
root.insert(115);
root.insert(109);
root.insert(80);

drawBinaryTree(root, document.querySelector('canvas'));

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

const BST = ()=>{
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
    const [invalidBSTInput, setInvalidBSTInput] = useState(false)
    const [helperMessage, setHelperMessage] = useState('Insert Element (1):)')


    //state variables for actions
    const [BSTSize, setBSTSize] = useState();
    const [tempVal, setTempVal] = useState();
    const [BSTValues, setBSTValues] = useState([])
    const values = []


    useEffect(()=>{
        <CreateBST/>
    },[BSTValues])

    const onCreate=()=>{
        if(tempVal !== undefined &&tempVal.length !== undefined){
            console.log("entred here")
            var txt = tempVal;
            var numb = txt.match(/\d/g);
            numb = numb.join("");
            for(var i=0;i<numb.length;i++){
                values.push(numb[i])
            }
                if(Number(BSTSize)+1 === values.length){
                    setBSTValues(values)
                }
        }
        else if(tempVal === undefined){
            alert("Empty BST")
        }
        else if(BSTSize > 10){
            setInvalidInput(true);
        }


    }

    const BSTInput=(e)=>{
        if(e.target.value.length > 19){
            setInvalidBSTInput(true)
        }
        else if(e.target.value.length>0){
            setTempVal(e.target.value);
        }

    }

    const [newArr, setNewArr] = useState()
    const CreateBST=()=>{
        return(
        <Stack justifyContent='center' direction="row" divider={<Divider orientation="vertical" flexItem />} spacing={1} >
                <Stack direction='row'>
                {BSTValues.map(item=>(
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
                <TextField variant='outlined' id='inputId' focused label='Insert' size='small' onChange={BSTInput} error={invalidBSTInput} helperText={helperMessage}> </TextField>
                <Button variant='contained' id='createId' onClick={onCreate}>
                
                    <NavigateNextIcon/>
                </Button>

            </Grid>
        </Grid>
        </ThemeProvider>
        </div>
        
       )
       
}
























// const root = new BinarySearchTree(100);
// [50,145,100,20,70,85,60,45,50].forEach(num) =root.insert(num);

// drawBinaryTree(root, document.querySelector('canvas')),{
//     Type:visualizationType.PRETTY,
// }

export default BST; 


