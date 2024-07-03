import React from "react";
import { useState, useEffect } from "react";
import More from "../../assets/icons/more.png";
import Paper from "@mui/material/Paper";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import TablePagination from "@mui/material/TablePagination";
import "../adminComponent/stylesheets/updateTable.css";

const columns = [
  { id: "id", label: "id:", minWidth: 57 },
  { id: "date", label: "Date:", minWidth: 116.77 },
  { id: "name", label: "Name:", minWidth: 116.77 },
  { id: "word", label: "Word:", minWidth: 116.77 },
  { id: "briefInfo", label: "Brief-info:", minWidth: 116.77 },
  { id: "status", label: "Status:", minWidth: 66 },
];

function createData(id, date, name, word, briefInfo, status) {
  return { id, date, name, word, briefInfo, status };
}

const images = [
  { image: <img src={More} width={20} /> },
  { image: <img src={More} width={20} /> },
  { image: <img src={More} width={20} /> },
  { image: <img src={More} width={20} /> },
  { image: <img src={More} width={20} /> },
  { image: <img src={More} width={20} /> },
  { image: <img src={More} width={20} /> },
  { image: <img src={More} width={20} /> },
];

const rows = [
  createData(
    "#123",
    "19 May 2024",
    "Jane Doe",
    "Juvenile",
    "the noun juvenile  refers to someone not physically or.......",
    "Open"
  ),
  createData(
    "#123",
    "19 May 2024",
    "Jane Doe",
    "Juvenile",
    "the noun juvenile refers to someone not physically or.......",
    "Open"
  ),
  createData(
    "#123",
    "19 May 2024",
    "Jane Doe",
    "Juvenile",
    "the noun juvenile refers to someone not physically or.......",
    "Resolved"
  ),
  createData(
    "#123",
    "19 May 2024",
    "Jane Doe",
    "Juvenile",
    "the noun juvenile refers to someone not physically or.......",
    "Open"
  ),
  createData(
    "#123",
    "19 May 2024",
    "Jane Doe",
    "Juvenile",
    "the noun juvenile refers to someone not physically or.......",
    "Open"
  ),
  createData(
    "#123",
    "19 May 2024",
    "Jane Doe",
    "Juvenile",
    "the noun juvenile refers to someone not physically or.......",
    "Open"
  ),
  createData(
    "#123",
    "19 May 2024",
    "Jane Doe",
    "Juvenile",
    "the noun juvenile refers to someone not physically or.......",
    "Resolved"
  ),
  createData(
    "#123",
    "19 May 2024",
    "Jane Doe",
    "Juvenile",
    "the noun juvenile refers to someone not physically or.......",
    "Open"
  ),
];

const UpdateTable = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [Menu, setMenu] = useState(Array(rows.length).fill(false));

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const hanndleMenu = (index) => {
    setMenu((prevMenu) => {
      const newMenu = [...prevMenu];
      newMenu[index] = !newMenu[index];
      return newMenu;
    });
  };

  useEffect(() => {
    const timeoutIds = Menu.map((isOpen, index) => {
      if (isOpen) {
        return setTimeout(() => {
          setMenu((prevMenu) => {
            const newMenuState = [...prevMenu];
            newMenuState[index] = false;
            return newMenuState;
          });
        }, 5000);
      }
      return null;
    });

    return () => {
      timeoutIds.forEach((timeoutId) => clearTimeout(timeoutId));
    };
  }, [Menu]);
  return (
    <div className="UpdateTable">
      <Paper style={{ width: "100&", overflow: "hidden" }} className="paperC">
        <TableContainer style={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    className="size"
                    style={{
                      minWidth: column.minWidth,
                      fontFamily: "inter",
                      fontSize: 17,
                    }}
                  >
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
                        className={row.briefInfo ? "mobile-view" : ""}
                        key={column.id}
                        style={{
                          fontSize: 14,
                          fontFamily: "Inter, sans-serif",
                          fontWeight: 400,
                          color: "#1E1E1E",
                          width: row.briefInfo ? "218px" : 122,
                          height: row.briefInfo ? "72px" : "auto",
                          ...(column.id === "status" && {
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            marginTop: "50px",
                          }),
                        }}
                      >
                        {row[column.id]}
                        {column.id === "status" && (
                          <div className="More">
                            <img
                              src={More}
                              width={20}
                              alt="More"
                              onClick={() => hanndleMenu(rowIndex)}
                            />
                            {Menu[rowIndex] && (
                              <div className="Menu">
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
  );
};
export default UpdateTable;
