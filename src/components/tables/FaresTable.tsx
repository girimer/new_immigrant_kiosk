import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function FaresTable() {
  return (
    <TableContainer component={Paper} sx={{ maxWidth: 400 }}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Fare</TableCell>
            <TableCell align="right">One time</TableCell>
            <TableCell align="right">Pack of 10 Tickets&nbsp;($)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow
            key={"Adult"}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {"Adult"}
            </TableCell>
            <TableCell align="right">{"$3.60"}</TableCell>
            <TableCell align="right">{"$36.00"}</TableCell>
          </TableRow>
          <TableRow
            key={"Youth"}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {"Youth"}
            </TableCell>
            <TableCell align="right">{"$2.45"}</TableCell>
            <TableCell align="right">{"$24.50"}</TableCell>
          </TableRow>
          <TableRow
            key={"Child"}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {"Child"}
            </TableCell>
            <TableCell align="right">{"Free"}</TableCell>
            <TableCell align="right">{"Free"}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
