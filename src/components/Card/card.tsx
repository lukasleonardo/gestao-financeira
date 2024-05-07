import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { SvgIcon } from '@mui/material';
import { useState } from 'react';
import './card.css'


export default function BasicCard(props:any){
  const [toggle, setToggle] = useState(false)
  const [text, setText] = useState('Show')
  const handleToggle = ()=>{
    setToggle(!toggle)
    if(toggle == false){
      setText('Hide')
    }else{
      setText('Show')
    }
  }
  return (
    <Card className='card-container'>     
      <CardContent className='card-content' style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
        <Typography className='card-title'gutterBottom variant="h5" component="div">
          <p>{props.title}</p> <SvgIcon component={props.ico} inheritViewBox />
        </Typography>
        {toggle==true && (<Typography className='card-value' variant="body1" color="text.primary">
        {props.value}
        </Typography>)}
        
      </CardContent>
      <CardActions>
        <Button onClick={handleToggle} size="small">{text}</Button>
      </CardActions>
    </Card>
  );
}

