import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Registration from './Registration'
import {Route, Routes, Link} from 'react-router-dom'
import Login from './Login'
import App from '../App'
export default function NavBar() {  
  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            MYSITE
          </Typography>
          
          <Button color="inherit"><Link to='/' component={<App />}>Home</Link></Button>
          <Button color="inherit"><Link to='/registration' component={<Registration />}>Registration</Link></Button>
          <Button color="inherit"><Link to='/login' component={<Login />}>Login</Link></Button>
          
        </Toolbar>
      </AppBar>
    </Box>
    </>
  );
}
