import { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
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
  const navItems = ['Home', 'About', 'Projects', 'Contact'];

  const [ appbar, setAppbar ] = useState(false);

  const handleAppbar = () => {
    setAppbar((prevState) => !prevState);
  };

  const drawer = (
      <Box>
        <List>
          {navItems.map((item) => (
            <ListItem key={item}>
              <ListItemButton 
                sx={{
                  fontFamily: 'League Spartan', //not applying??
                  color: '#333745', // not applying??
                  '&:hover': {
                    color: '#00CECB',
                    backgroundColor: 'none',
                  },
                  '&:focus': {
                    fontWeight: 700,
                    color: '#00CECB',
                  }
                }}
              >
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
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
              sx={{ display: { xs: 'block', sm: 'none' } }}
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
              <Button 
                className="appbar"
                sx={{ 
                  fontFamily: 'League Spartan , sans-serif',
                  color: '#fff',
                  '&:hover': {
                    color: '#00CECB',
                  },
                  '&:focus': {
                    fontWeight: 700,
                    color: '#00CECB',
                  }
                }}
              >
                Home
              </Button>

              <Button 
                className="appbar"
                sx={{ 
                  fontFamily: 'League Spartan , sans-serif',
                  color: '#fff',
                  '&:hover': {
                    color: '#00CECB',
                  },
                  '&:focus': {
                    fontWeight: 700,
                    color: '#00CECB',
                  }
                }}
              >
                About
              </Button>

              <Button 
                className="appbar"
                sx={{ 
                  fontFamily: 'League Spartan , sans-serif',
                  color: '#fff',
                  '&:hover': {
                    color: '#00CECB',
                  },
                  '&:focus': {
                    fontWeight: 700,
                    color: '#00CECB',
                  }
                }}
              >
                Projects
              </Button>

              <Button 
                className="appbar"
                sx={{ 
                  fontFamily: 'League Spartan , sans-serif',
                  color: '#fff',
                  '&:hover': {
                    color: '#00CECB',
                  },
                  '&:focus': {
                    fontWeight: 700,
                    color: '#00CECB',
                  }
                }}
              >
                <Link smooth to="#contact"></Link>
                Contact
              </Button>

              {/* {navItems.map((item) => (
                <Button 
                  key={item} 
                  sx={{ 
                    fontFamily: 'League Spartan , sans-serif',
                    color: '#fff',
                    '&:hover': {
                      color: '#00CECB',
                    },
                    '&:focus': {
                      fontWeight: 700,
                      color: '#00CECB',
                    }
                  }}
                >
                  {item}
                </Button>
              ))} */}
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