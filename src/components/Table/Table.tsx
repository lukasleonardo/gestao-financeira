
import { TableBody,TableCell,TableRow, TableHead, TableContainer, Table, Paper } from "@mui/material";

export default function BasicTable({itens, setItens}:any) {
  {itens.forEach((element:any) => {  console.log(element)   })}
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
        
            <TableRow
              key={1}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                oi
              </TableCell>
              <TableCell align="right">OI </TableCell>
              <TableCell align="right">O I</TableCell>
            </TableRow>
   
        </TableBody>
      </Table>
    </TableContainer>
  );
}

