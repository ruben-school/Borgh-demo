import React from "react";

// Styling imports
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import ControlPointIcon from "@material-ui/icons/ControlPoint";

// import { useGetDoorvoertijden } from "../Api/use-queries";


// const myContext = React.createContext(data);
let data = JSON.parse(localStorage.getItem("leveringen"));
const useStyles = makeStyles({
  table: {
    maxWidth: 725,
  },
});

export default function DoorvoerTabel() {
  // const data = useGetDoorvoertijden();
  // data = JSON.parse(data);
  const classes = useStyles();
  function handleRow() {
    window.location = "/checks";
  }

  return (
    <TableContainer className={classes.table} component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Datum</TableCell>
            <TableCell align="right">Tijd</TableCell>
            <TableCell align="right">Lev. Naam</TableCell>
            <TableCell align="right">Lev. Nummer</TableCell>
            <TableCell align="right">Aantal Pallets</TableCell>
            <TableCell align="right">Aantal Colli</TableCell>
            <TableCell align="right">
              <a href="/doorvoertijdenform">
                <ControlPointIcon />
              </a>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((data) => (
            <TableRow key={data.ID} onClick={handleRow}>
                <TableCell scope="row">{data.DATUM}</TableCell>
                <TableCell align="right">{data.TIJD}</TableCell>
                <TableCell align="right">{data.LEVNAAM}</TableCell>
                <TableCell align="right">{data.LEVNR}</TableCell>
                <TableCell align="right">{data.NPALLETS}</TableCell>
                <TableCell align="right">{data.NCOLLI}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
