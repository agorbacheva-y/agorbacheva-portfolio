import { useState } from "react";
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
            <ListItemButton>
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
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            sx={{ display: { xs: 'block', sm: 'none' } }}
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleAppbar}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: '#fff' }}>
                {item}
              </Button>
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