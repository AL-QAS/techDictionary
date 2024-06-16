import React from 'react'
import "../adminComponent/stylesheets/cardFeed.css"
import Image from "../../assets/images/potriate.png"
import { useState } from "react";
import More from "../../assets/icons/more.png"
import Paper from '@mui/material/Paper';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import TablePagination from '@mui/material/TablePagination';


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

const rows = [
  createData('#123', "Jane Doe", "19 May 2024", "Pending", "lorem", <img src = {More} width={20}/>),
  createData('#123', 'Jane Doe', "19 May 2024", "Pending", "lorem", <img src = {More} width={20}/>),
  createData('#123', 'Jane Doe', "19 May 2024", "Pending", "lorem", <img src = {More} width={20}/>),
  createData('#123', 'Jane Doe', "19 May 2024", "Pending", "lorem", <img src = {More} width={20}/>),
  createData('#123', 'Jane Doe', "19 May 2024", "Pending", "lorem", <img src = {More} width={20}/>),
  createData('#123', 'Jane Doe', "19 May 2024", "Pending", "lorem", <img src = {More} width={20}/>),
  createData('#123', 'Jane Doe', "19 May 2024", "Pending", "lorem", <img src = {More} width={20}/>),
  createData('#123', 'Jane Doe', "19 May 2024", "Pending", "lorem", <img src = {More} width={20}/>),
];


const CardFeed = () => {
  const [page, setPage] = useState(0); 
  const [rowsPerPage, setRowsPerPage] = useState(10); 
  const  [Options, setOptions] = useState(false)


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0); 
  };
  const handleIconClick = () => {
    setOptions(!Options)
}
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
                <TableCell key={column.id} style={{ minWidth: column.minWidth,  fontFamily: "inter", fontSize:20,}}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <TableRow key={row.code}>
                  {columns.map((column) => (
                    <TableCell key={column.id} style ={{fontSize: 16, fontFamily: "inter", fontWeight:400,  color: "1E1E1E" }}>
                      {column.id === 'density' ? row.density.toFixed(2) : row[column.id]}
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
     <div className="section">
     <h1>Top Searched words</h1>
     <div className="other-table">
     <div className="list">
     <div className='words'>
      <h3>Word</h3>
    <li>lorem ipsum</li>
    <li>lorem ipsum</li>
    <li>lorem ipsum</li>
    <li>lorem ipsum</li>
    <li>lorem ipsum</li>
    <li>lorem ipsum</li>
    <li>lorem ipsum</li>
    <li>lorem ipsum</li>
      </div>
      <div className="no-words">
        <h3>No.of searches</h3>
      <div className="v2">
      <div className="nums">
          <p>2,445</p>
          <p>2,445</p>
          <p>2,445</p>
          <p>2,445</p>
          <p>2,445</p>
          <p>2,445</p>
          <p>2,445</p>
          <p>2,445</p>
        </div>
        <div className="img">
       <div onClick={handleIconClick}><img src = {More} width={20}/></div>
       <div onClick={handleIconClick}><img src = {More} width={20}/></div>
       <div onClick={handleIconClick}><img src = {More} width={20}/></div>
       <div onClick={handleIconClick}><img src = {More} width={20}/></div>
       <div onClick={handleIconClick}><img src = {More} width={20}/></div>
       <div onClick={handleIconClick}><img src = {More} width={20}/></div>
       <div onClick={handleIconClick}><img src = {More} width={20}/></div>
       <div onClick={handleIconClick}><img src = {More} width={20}/></div>
        {Options && (
            <div className="More">
                <div>Delete</div>
            </div>
        )}
        </div>
      </div>
      </div>
     </div>
     <div className='see-more'><h3>See All</h3></div>
     </div>

     </div>
    </div>
    </>
  )
}

export default CardFeed