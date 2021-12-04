import {React, useEffect, useState} from 'react' 
import '../styles.css'
import { Grid, Stack, Divider, Paper, TextField, Button } from '@mui/material'
//bimport {TextField} from '@mui/material'
//import { grid } from '@mui/system';
// ñimport { makeStyles, styled } from '@mui/styles';
// import NavigateNextIcon from '@mui/icons-material/NavigateNext';
 import { createMuiTheme, ThemeProvider,} from '@mui/material';
// import {BinarySearchTreeNode, VisualizationType, drawBinaryTree, BinaryTreeNode,} from 'binary-tree-visualizer';
// import { setTheme } from 'binary-tree-visualizer';

const theme =  createMuiTheme({
  palette:{
      primary:{
          main:'#f6f6f6'
      } 
  },
})

function Insert(){
  const str = document.getElementById("insertData").Value;
}


function BST(){
 
     return(
     <>
      <TextField variant='outlined' label='Insert' size='small' type='number'> </TextField>
                  <Button variant='contained' id='insertData' onClick={Insert}>INSERT</Button>
     </>
   );
 }

    
    

export default BST; 


