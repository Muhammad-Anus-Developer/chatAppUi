import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Input(props) {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >

     {/* <TextField id="outlined-basic"  style={props.styling}  label={props.name} InputLabelProps={{style: {fontSize: "15px"}}} variant="outlined" /> */}
      <TextField id="standard-basic"  InputLabelProps={{style: {fontSize: "15px"}}} label={props.name} style={props.styling} variant="standard" />
    </Box>
  );
}

