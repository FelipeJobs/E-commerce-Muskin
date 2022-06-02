import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import { Box } from '@material-ui/core';



import './MenuNav.css'

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box >
        
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        style={{fontFamily: "Jacques Francois", fontSize:'15px', textTransform: 'none', color: 'white' }}
        className='bnt-nav'

      >
        Produtos
      </Button>
      <Menu

        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}

      >
        <Link className='text-decoration-none' to='/produtos'>
          <MenuItem
            style={{
              color: 'black',
              fontFamily: 'serif',
              fontSize: '18px',
            }}
            onClick={handleClose}>Produtos</MenuItem>
        </Link>

        <Link className='text-decoration-none' to='/criarProduto'>
          <MenuItem
            style={{
              color: 'black',
              fontFamily: 'serif',
              fontSize: '18px',
            }}
            onClick={handleClose}>Cadastrar produto</MenuItem>
        </Link>

      </Menu>
    </Box>
  );
}
