
import { TableBody,TableCell,TableRow, TableHead, TableContainer, Table, Paper } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
export default function BasicTable({itens, setItens}:any) {
 
  

  return (
    <TableContainer component={Paper} >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead >
          <TableRow>
            <TableCell >Descrição</TableCell>
            <TableCell align="right">Valor</TableCell>
            <TableCell align="right">Tipo</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {
        itens.map((element:any)=>(
            <TableRow
              key={element.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {element.description}
              </TableCell>
              <TableCell align="right">{element.amount} </TableCell>
              <TableCell align="right">{element.expense == false?(<ArrowCircleUpIcon color="success"/>):(<ArrowCircleDownIcon color="error"/>)}</TableCell>
              <TableCell align="right"><DeleteIcon/></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

