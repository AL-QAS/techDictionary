import React from 'react'
import "../adminComponent/stylesheets/cardFeed.css"
import Image from "../../assets/images/potriate.png"
import { useState, useEffect } from "react";
import More from "../../assets/icons/more.png"
import Paper from '@mui/material/Paper';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import TablePagination from '@mui/material/TablePagination';
import NumSearchTable from './NumSearchTable';

const columns = [
  { id: 'id', label: 'id',  minWidth: 57},
  { id: 'name', label: 'Name', minWidth: 116.77 },
  { id: 'Date', label: 'Date', minWidth: 116.77 },
  { id: 'status', label: 'Status', minWidth: 116.77 },
  { id: 'word', label: 'word', minWidth: 116.77 },
  { id: 'action', label: 'Action', minWidth:66 },
];

function createData(id, name, Date, status, word, action) {
  return {id, name, Date, status, word, action};
}

const images = [
  {image:<img src = {More} width={20}/>},
  {image:<img src = {More} width={20}/>},
  {image:<img src = {More} width={20}/>},
  {image:<img src = {More} width={20}/>},
  {image:<img src = {More} width={20}/>},
  {image:<img src = {More} width={20}/>},
  {image:<img src = {More} width={20}/>},
  {image:<img src = {More} width={20}/>},
]

const rows = [
  createData('#123', "Jane Doe", "19 May 2024", "Pending", "lorem",),
  createData('#123', 'Jane Doe', "19 May 2024", "Pending", "lorem",),
  createData('#123', 'Jane Doe', "19 May 2024", "Pending", "lorem",),
  createData('#123', 'Jane Doe', "19 May 2024", "Pending", "lorem",),
  createData('#123', 'Jane Doe', "19 May 2024", "Pending", "lorem",),
  createData('#123', 'Jane Doe', "19 May 2024", "Pending", "lorem",),
  createData('#123', 'Jane Doe', "19 May 2024", "Pending", "lorem",),
  createData('#123', 'Jane Doe', "19 May 2024", "Pending", "lorem", ),
];


const CardFeed = () => {
  const [page, setPage] = useState(0); 
  const [rowsPerPage, setRowsPerPage] = useState(10); 
  const [Options, setOptions] = useState(false)
  const [Menu,  setMenu] = useState( Array(rows.length).fill(false));


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleIconClick = () => {
    setOptions(!Options)
  }
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0); 
  };
  const hanndleMenu = (index) =>{
    setMenu(prevMenu => {
     const newMenu = [...prevMenu];
     newMenu[index] = !newMenu[index];
     return newMenu;
    })
}

useEffect(() => {
 const timeoutIds = Menu.map((isOpen, index) => {
   if (isOpen) {
     return setTimeout(() => {
       setMenu(prevMenu => {
         const newMenuState = [...prevMenu];
         newMenuState[index] = false;
         return newMenuState;
       });
     }, 5000);
   }
   return null;
 });

 return () => {
   timeoutIds.forEach(timeoutId => clearTimeout(timeoutId));
 };
}, [Menu]);
  return (
    <>
    <div className='card-section'>
    <div className='table'>
      <h1>User Request</h1>
      <Paper style={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer style={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow >
              {columns.map((column) => (
                <TableCell key={column.id} style={{ minWidth: column.minWidth,  fontFamily: "inter", fontSize:15,}}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, rowIndex) => (
                <TableRow key={rowIndex}>
                  {columns.map((column) => (
                    <TableCell key={column.id} style ={{fontSize: 13, fontFamily: "inter", fontWeight:400,  color: "1E1E1E" , }}>
                      {row[column.id]}
                      {column.id === "action" && (
                <div className="img">
                     <img src={More} alt=""  width={18}  onClick={() => hanndleMenu(rowIndex)}/>
                      {Menu[rowIndex] && (
                      <div className='Menu'>
                        <p>delete</p>
                      </div>
                    )}
             </div>
                )}

                    </TableCell>
                  ))}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
     </div>
     <div className="otherTable">
     <NumSearchTable/>
     </div>
    </div>
    </>
  )
}

export default CardFeed