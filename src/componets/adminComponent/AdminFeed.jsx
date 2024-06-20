import React from 'react'
import { useState, useEffect} from "react";
import More from "../../assets/icons/more.png"
import Paper from '@mui/material/Paper';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import TablePagination from '@mui/material/TablePagination';
import "../adminComponent/stylesheets/adminFeed.css"


const columns = [
  { id: 'id', label: 'id:',  minWidth: 57},
  { id: 'Date', label: 'Date:', minWidth: 116.77 },
  { id: 'word', label: 'word:', minWidth: 116.77 },
  { id: 'status', label: 'Status:', minWidth: 116.77 },
  { id: 'publisher', label: 'Publisher:', minWidth: 116.77 },
  { id: 'action', label: 'Action:', minWidth:66 },
];

function createData(id, Date, word, status, publisher, action) {
  return {id, Date, word, status, publisher, action};
}

const images =[
  {image:  <img src = {More} width={20}/>, },
  {image:  <img src = {More} width={20}/>, },
  {image:  <img src = {More} width={20}/>, },
  {image:  <img src = {More} width={20}/>, },
  {image:  <img src = {More} width={20}/>, },
  {image:  <img src = {More} width={20}/>, },
  {image:  <img src = {More} width={20}/>, },
  {image:  <img src = {More} width={20}/>, },
]

const rows = [
  createData('#123', "19 May 2024", "lorem", "Pending", "Jane Doe",),
  createData('#123', "19 May 2024", "lorem", "Pending", "Jane Doe",),
  createData('#123', "19 May 2024", "lorem", "Pending", "Jane Doe",),
  createData('#123', "19 May 2024", "lorem", "Pending", "Jane Doe",),
  createData('#123', "19 May 2024", "lorem", "Pending", "Jane Doe",),
  createData('#123', "19 May 2024", "lorem", "Pending", "Jane Doe",),
  createData('#123', "19 May 2024", "lorem", "Pending", "Jane Doe",),
  createData('#123', "19 May 2024", "lorem", "Pending", "Jane Doe",)
];



const AdminFeed = () => {
  const [page, setPage] = useState(0); 
  const [rowsPerPage, setRowsPerPage] = useState(10); 
  const [Menu,  setMenu] = useState( Array(rows.length).fill(false));


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

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
     <div className='feed'>
      <Paper style={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer style={{ maxHeight: 440, }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow >
              {columns.map((column) => (
                <TableCell key={column.id} style={{ minWidth: column.minWidth,  fontFamily: "inter", fontSize:17,}}>
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
          <TableCell
            key={column.id}
            style={{
              fontSize: 14,
              fontFamily: "Inter, sans-serif",
              fontWeight: 400,
              color: "#1E1E1E",
            }}
          >
            {row[column.id]}
           {column.id === "action" && (
           <>
       <div className="actions">
       <div className="btn">
            <div><p>Edit</p></div>           
         </div>
         <div className="img">
         <img src={More} width={20} height={20} onClick={()=> hanndleMenu(rowIndex)}/>
               {Menu[rowIndex] && (
                      <div className='Menu'>
                        <p>delete</p>
                      </div>
                    )}
         </div>
       </div>
           </>
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
    </>
  )
}

export default AdminFeed
