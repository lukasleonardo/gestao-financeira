import { Button, Container, FormControl, FormControlLabel, FormLabel, Paper, Radio, RadioGroup, TextField } from '@mui/material'
import React from 'react'

const InputField = () => {
  return (
    <Container component={Paper} style={{display:'flex', flexDirection:'row', padding:'2em'}}>
        <TextField id="standard-basic" label="Standard" variant="standard" />
        <TextField id="standard-basic" label="Standard" variant="standard" />
        <FormLabel id="inputType">Tipo</FormLabel>
        <RadioGroup
          style={{display:'flex', flexDirection:'row'}}
          aria-labelledby="inputType"
          name="radio-buttons-group"
        >
          <FormControlLabel value="Entrada" control={<Radio />} label="Entrada" />
          <FormControlLabel value="Saída" control={<Radio />} label="Saída" />
        </RadioGroup>
      
      <Button variant="contained">Add</Button>
    </Container>
      
    
  )
}

export default InputField