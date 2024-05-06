import { Button, Container, FormControl, FormControlLabel, FormLabel, Paper, Radio, RadioGroup, TextField } from '@mui/material'
import './'

const Form = () => {
  return (
    <Container id='form-container' component={Paper} style={{display:'flex', flexDirection:'row', padding:'2em'}}>
        <TextField id="description" label="Description" variant="standard" />
        <TextField id="value" label="Value" variant="standard" />
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

export default Form