
import Card from '../components/Card'
import BasicTable from '../components/Table'
import '../styles/global.css'
import { Container } from '@mui/material'
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import TrendingDownOutlinedIcon from '@mui/icons-material/TrendingDownOutlined';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import InputField from '../components/InputField'
import { useState } from 'react';
const Home = () => {
  const [income, setIncome] = useState('0')
  const [outcome, setOutcome] = useState('0')
  const [total, setTotal] = useState('0')
    
  
  return (
    <Container maxWidth="lg" style={{padding:'1em'}}>
      <div style={{display:'flex', justifyContent:'space-between'}}>
        <Card title="Entradas" value={income} ico={TrendingUpOutlinedIcon}/>
        <Card title="Saídas" value={outcome} ico={TrendingDownOutlinedIcon}/>
        <Card title="Total" value={total} ico={AttachMoneyIcon}/>
      </div>
      <InputField/>
      <BasicTable/>
      
    </Container>
  )
}

export default Home