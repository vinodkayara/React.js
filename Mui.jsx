import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

export default function Mui() {
  return (
    <div style={{padding:'20px',display:'flex',justifyContent:'center'}}>
         <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <TextField id="outlined-basic" label="First Name" variant="outlined" /><br /><br />
        <TextField id="outlined-basic" label="Last Name" variant="outlined" /><br /><br />
        <TextField id="outlined-basic" label="Age" variant="outlined" /><br /><br />
        <TextField id="outlined-basic" label="Address" variant="outlined" /><br /><br />
        <Button variant="contained">submit</Button>
        </CardContent>
        </Card>
    </div>
  )
}
