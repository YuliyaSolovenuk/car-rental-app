import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import { Navigation } from 'components/navigation/Navigation';

const Header = () => {
  return ( <header >
    <Box sx={{ display: 'flex', position: 'static'}}>
      <AppBar component="nav" sx={{padding: '0 125px'}}>
        <Toolbar>
          <Navigation />
        </Toolbar>
      </AppBar>
    </Box>
  </header>)
};

export default Header;
