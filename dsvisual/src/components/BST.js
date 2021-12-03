import {React, useEffect, useState} from 'react' 
import '../styles.css'
//  import { Grid, Stack, Divider, Paper, TextField, Button } from '@mui/material'
 import {TextField} from '@mui/material'
import { grid } from '@mui/system';
// import { makeStyles, styled } from '@mui/styles';
// import NavigateNextIcon from '@mui/icons-material/NavigateNext';
// import { createMuiTheme, ThemeProvider,} from '@mui/material';
// import {BinarySearchTreeNode, VisualizationType, drawBinaryTree, BinaryTreeNode,} from 'binary-tree-visualizer';
// import { setTheme } from 'binary-tree-visualizer';

function BST(){
  
    return(
    <div className="BST">
    <TextField 
    label ="Insert"
    color="secondary"
    variant="outlined"
    type="number">
    </TextField>
    {/* <Button variant='contained' id='createId' onClick={onCreate}></Button> */}
   </div>
  );
}
 

export default BST; 


