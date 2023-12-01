import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function PassesTable() {
  return (
    <TableContainer component={Paper} sx={{ maxWidth: 400 }}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Passes</TableCell>
            <TableCell align="right">Day Pass</TableCell>
            <TableCell align="right">Monthly Pass&nbsp;($)</TableCell>
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
            <TableCell align="right">{"$11.25"}</TableCell>
            <TableCell align="right">{"$112.00"}</TableCell>
          </TableRow>
          <TableRow
            key={"Youth"}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {"Youth"}
            </TableCell>
            <TableCell align="right">{"$8.25"}</TableCell>
            <TableCell align="right">{"$82.00"}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
