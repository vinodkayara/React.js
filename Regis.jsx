import React from 'react'
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
export default function Regis() {
  return (
    <div style={{paddingTop:'100px',margin:'auto',width:'700px',height:'700px',backgroundColor:'pink'}}>
      <h1><center>REGISTRATION FORM</center></h1>
 <Card sx={{margin:'auto',width:'250px',paddingTop:'10px' }}>
 <CardContent>
 <TextField id="outlined-basic" label="Name" variant="outlined" />
 <FormControl fullWidth variant="outlined" style={{ marginBottom: '16px' }}>
            <InputLabel id="college-label">Select your college</InputLabel>
            <Select
              labelId="college-label"
              label="Select your college"
              id="college"
            >
              <MenuItem value="MITE">MITE</MenuItem>
              <MenuItem value="NMAMIT">NMAMIT</MenuItem>
              <MenuItem value="MIT">MIT</MenuItem>
            </Select>
          </FormControl>
    <TextField id="outlined-basic" label="Phone Number" variant="outlined" />
    <TextField id="outlined-basic" label="Email" variant="outlined" /><br/><br/>
     <center> <Button variant="contained">submit</Button></center> 
     </CardContent>
</Card>
    </div>
  )
}