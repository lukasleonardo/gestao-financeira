import { Button, Container, FormControl, FormControlLabel, FormGroup, FormLabel, Paper, Radio, RadioGroup, TextField } from '@mui/material'
import './form.css'
import { useState } from 'react'

const Form = (props:any) => {
  const [description, setDescrition] = useState("")
  const [amount,setAmount] = useState("")
  const [isExpense, setExpense] = useState(false)

  const generatedId = ()=> Math.round(Math.random()*1000)
  const handleSave=()=>{
    if(!description||!amount){
      alert("Informe o valor/descrição")
    }else if(Number(amount) < 0){
      alert('O valor precisaser positivo')
    }
    
    const transaction = {
      id:generatedId(),
      description:description,
      amount:amount,
      expense:isExpense
    }

    props.handleAdd(transaction)
    
    setAmount("")
    setDescrition("")
    
  }


  return (
      <Container id='form-container' component={Paper} style={{display:'flex', flexDirection:'row', padding:'2em'}}>
        <TextField id="description" label="Description" variant="standard" onChange={(e)=>setDescrition(e.target.value)} value={description}/>
        <TextField id="Amount" label="Amount" onChange={(e)=>setAmount(e.target.value)} value={amount} variant="standard" />
        <FormGroup>
        <FormLabel id="inputType">Tipo</FormLabel>
          <RadioGroup
            style={{display:'flex', flexDirection:'row'}}
            aria-labelledby="inputType"
            name="radio-buttons-group"
          >
            <FormControlLabel value={false} onChange={()=>setExpense(false)} control={<Radio />} label="Entrada" />
            <FormControlLabel value={true} onChange={()=>setExpense(true)} control={<Radio />} label="Saída" />
          </RadioGroup>
        </FormGroup>
        
      
      <Button id="addBtn" onClick={handleSave} variant="contained">Adicionar</Button>

      </Container>     
  )
}

export default Form