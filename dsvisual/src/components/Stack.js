import React from 'react'
//import Button from '@mui/material/Button';

const Stack = ()=>{
    return(
        <div>
          <h1>Stack</h1>
          <table style="">
              <td>
                  <label>Input Data: </label>
                  <input type="text" id="data"></input>
              </td>
              <td>
                  <button>Push</button>
              </td>
              <td>
                  <button>Pop</button>
              </td>
          </table>
        </div>  
    )
}

export default Stack; 