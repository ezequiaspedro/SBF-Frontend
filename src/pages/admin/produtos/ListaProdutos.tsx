import React from 'react';
import { withStyles, Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { IconButton, Menu, MenuItem } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.primary.dark,
      textTransform: "uppercase",
      fontSize: 12,
    },
    body: {
      fontSize: 14,
    },
  })
)(TableCell);

const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }),
)(TableRow);

interface Product {
  id: number
  title: string
  quantity: number
  size: string|number
  categories?: string[]|null
  subcategories?: string[]|null
}

const rows: Product[] = [
  {
    id: 1,
    title: "Camisa Preta Básica",
    size: "M",
    quantity: 20,
    categories: ['Vestuário'],
    subcategories: ['Camisetas', 'Moda Masculina']
  },
  {
    id: 2,
    title: "Camisa Branca Básica",
    size: "M",
    quantity: 20,
    categories: ['Vestuário'],
    subcategories: ['Camisetas', 'Moda Masculina']
  },
  {
    id: 3,
    title: "Camisa Vermelha Básica",
    size: "M",
    quantity: 20,
    categories: ['Vestuário'],
    subcategories: ['Camisetas', 'Moda Masculina']
  },
  {
    id: 4,
    title: "Camisa Verde Básica",
    size: "M",
    quantity: 20,
    categories: ['Vestuário'],
    subcategories: ['Camisetas', 'Moda Masculina']
  },
  {
    id: 5,
    title: "Camisa Preta Básica",
    size: "M",
    quantity: 20,
    categories: ['Vestuário'],
    subcategories: ['Camisetas', 'Moda Masculina']
  },
  {
    id: 7,
    title: "Camisa Branca Básica",
    size: "M",
    quantity: 20,
    categories: ['Vestuário'],
    subcategories: ['Camisetas', 'Moda Masculina']
  },
  {
    id: 8,
    title: "Camisa Preta Básica",
    size: "M",
    quantity: 20,
    categories: ['Vestuário'],
    subcategories: ['Camisetas', 'Moda Masculina']
  },
  {
    id: 9,
    title: "Camisa Branca Básica",
    size: "M",
    quantity: 20,
    categories: ['Vestuário'],
    subcategories: ['Camisetas', 'Moda Masculina']
  }
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const options = [
  'Alterar',
  'Entrada/Saída',
  'Excluir'
];

export default function CustomizedTables() {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Produto</StyledTableCell>
            <StyledTableCell align="center">Quantidade</StyledTableCell>
            <StyledTableCell align="center">Tamanho</StyledTableCell>
            <StyledTableCell align="center">Categoria(s)</StyledTableCell>
            <StyledTableCell align="center">Subcategoria(s)</StyledTableCell>
            <StyledTableCell align="center">&nbsp;</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                {row.title}
              </StyledTableCell>
              <StyledTableCell align="center">{row.quantity}</StyledTableCell>
              <StyledTableCell align="center">{row.size}</StyledTableCell>
              <StyledTableCell align="center">{row.categories ? row.categories.join(', ') : "&nbsp;" }</StyledTableCell>
              <StyledTableCell align="center">{row.subcategories ? row.subcategories.join(', ') : "&nbsp;" }</StyledTableCell>
              <StyledTableCell align="right">
              <IconButton
                aria-label="more"
                aria-controls={`long-menu-${row.id}`}
                aria-haspopup="true"
                onClick={handleClick}
              >
                <MoreVertIcon />
              </IconButton>
              <Menu
                id={`long-menu-${row.id}`}
                anchorEl={anchorEl}         
                open={open}
                onClose={handleClose}
                PaperProps={{
                  style: {
                    width: '20ch',
                    border: 'solid 1px rgba(0,0,0,0.15)'
                  },
                  elevation: 0
                }}
              >
                {options.map((option) => (
                  <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
                    {option}
                  </MenuItem>
                ))}
              </Menu>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}