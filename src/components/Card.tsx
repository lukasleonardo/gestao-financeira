
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { SvgIcon } from '@mui/material';
import { useState } from 'react';

export default function MediaCard(props: any) {
  const toggleHide = true;
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
    <Card sx={{ width: 345 }}>     
      <CardContent style={{display:'flex', justifyContent:'space-between'}}>
        <Typography gutterBottom variant="h5" component="div">
          {props.title} <SvgIcon component={props.ico} inheritViewBox />
        </Typography>
        {toggle==true && (<Typography className='value' variant="body1" color="text.primary">
        R$: {props.value}
        </Typography>)}
        
      </CardContent>
      <CardActions>
        <Button onClick={handleToggle} size="small">{text}</Button>
      </CardActions>
    </Card>
  );
}

function useEstate(arg0: boolean): [any, any] {
  throw new Error('Function not implemented.');
}
