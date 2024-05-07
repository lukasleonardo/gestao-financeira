import './resume.css'
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import TrendingDownOutlinedIcon from '@mui/icons-material/TrendingDownOutlined';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import Card from '../Card/card';

const Resume = (props:any) => {   
  return (
    
    <div className="container">
        <Card title="Entradas" value={props.income} ico={TrendingUpOutlinedIcon}/>
        <Card title="Saídas" value={props.expense} ico={TrendingDownOutlinedIcon}/>
        <Card title="Total" value={props.total} ico={AttachMoneyIcon}/>
    </div>
  
  )
}

export default Resume