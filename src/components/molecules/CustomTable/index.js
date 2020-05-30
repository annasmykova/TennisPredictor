import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: '#86C10F;',
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    // '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    // },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function CustomizedTables({ headArray, data, handleRowClick }) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            {
              Object.values(headArray).map((item, idx) =>
                (<StyledTableCell key={idx} align={item.align}>{item.title}</StyledTableCell>)
              )
            }
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <StyledTableRow  key={row.id} onClick={() => {
              handleRowClick && handleRowClick(row)
            }}>
              {
                Object.keys(headArray).map((item, idx) =>
                  (<StyledTableCell key={idx} align={headArray[item].align}>{row[item]}</StyledTableCell>)
                )
              }
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
