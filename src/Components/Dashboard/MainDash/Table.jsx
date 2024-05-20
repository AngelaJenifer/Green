import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './Table.css'


function createData(name, trackingId, date, status
) {
  return { name, trackingId, date, status };
}

const makeStyle=(status)=>{
  if(status === 'Approved')
  {
    return{
      background: 'rgb(145 254 159 / 47%)',
      color: 'green',
    }
  }
  else if(status === 'Pending'){
    return{
      background: '#ffadad8f',
      color: 'red',
    }
  }
  else{
    return{
      background: '#59bfff',
      color: 'white',
    }
  }
}


const rows = [
  createData("Lasania Chiken Fri", 18908424, "2 March 2022", "Approved"),
  createData("Big Baza Bang ", 18908424, "2 March 2022", "Pending"),
  createData("Mouth Freshner", 18908424, "2 March 2022", "Approved"),
  createData("Cupcake", 18908421, "2 March 2022", "Delivered"),
];

export default function BasicTable() {
  return (
    <div className="Table">
      <h3>Recent Orders</h3>
 
    <TableContainer component={Paper}
    style={{boxShadow: "0px 13px 20px 0px #80808029", 
    background: "linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%)",
  paddingBottom: "30px"}}
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead >
          <TableRow >
            <TableCell className='tableRow'>Product</TableCell>
            <TableCell align="left" className='tableRow'>Tracking ID</TableCell>
            <TableCell align="left" className='tableRow'>Date</TableCell>
            <TableCell align="left" className='tableRow'>
              Status
            </TableCell>
            <TableCell align="left" className='tableRow'></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" className='tablecon'>
                {row.name}
              </TableCell>
              <TableCell align="left" className='tablecon'>{row.trackingId}</TableCell>
              <TableCell align="left" className='tablecon'>{row.date}</TableCell>
              <TableCell align="left">
              <span className='status' style={makeStyle(row.status)}>{row.status}</span>
              </TableCell>
              <TableCell align="left" className='Details'>Detail</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}
