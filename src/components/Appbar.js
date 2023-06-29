import { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

const Appbar = () => {
  const navItems = [ 
    {section: 'Home', linkto: "/"},
    {section: 'About', linkto: "/aboutme"},
    {section: 'Projects', linkto: "/projects"},
    {section: 'Contact', linkto: "/contact"},
  ];

  const [ appbar, setAppbar ] = useState(false);

  const handleAppbar = () => {
    setAppbar((prevState) => !prevState);
  };

  const drawer = (
      <Box>
        <List>
          {navItems.map((navItem, index) => (
            <Link key={index} to={navItem.linkto}>
            <ListItem >
              <ListItemButton
                onClick={handleAppbar}
                sx={{
                  fontFamily: 'League Spartan', //not applying??
                  color: '#333745', // not applying??
                  '&:hover': {
                    color: '#00CECB',
                  },
                  '&:focus': {
                    fontWeight: 700, // not applying??
                    color: '#00CECB',
                  }
                }}
              >
                
                <ListItemText primary={navItem.section} sx={{ fontFamily: 'League Spartan' }} />
               
              </ListItemButton>
              
            </ListItem>
            </Link>
          ))}
          
        </List>
      </Box>
  )
  return (
      <Box>
        <CssBaseline />
        <AppBar component="nav" >
          <Toolbar sx={{ backgroundColor: '#333745'}}>
            <IconButton
              sx={{ 
                display: { xs: 'block', sm: 'none' },
              }}
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleAppbar}
            >
              <MenuIcon />
            </IconButton>
            <Box
              sx={{ 
                display: { xs: 'none', sm: 'block' },
              }}
            >
              {navItems.map((navItem, index) => (
                <HashLink smooth to={navItem.linkto}>
                  <Button 
                    key={index} 
                    sx={{
                      fontFamily: 'League Spartan , sans-serif',
                      color: '#fff',
                      fontSize: { xs: '1rem', sm: '1.25rem' },
                      padding: '1rem',
                      '&:hover': {
                        color: '#00CECB',
                      },
                      '&:focus': {
                        fontWeight: 700,
                        color: '#00CECB',
                      }
                    }}
                  >
                    {navItem.section}
                  </Button>
                </HashLink>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            variant="temporary"
            open={appbar}
            onClose={handleAppbar}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Box>
      </Box>
  );
};

export default Appbar;