import { NavLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export const Navigation = () => {

  return (
    <Box sx={{ display: 'block' }}>
      <Button
        sx={{
          color: '#fff',
          '&.active': {
            textDecoration: 'underline',
          },
          '&:hover,:focus': { boxShadow: '2', textDecoration: 'underline' },
        }}
        component={NavLink}
        to="/"
      >
        Home
      </Button>

        <Button
          sx={{
            color: '#fff',
            '&.active': {
              textDecoration: 'underline',
            },
            '&:hover,:focus': { boxShadow: '2', textDecoration: 'underline' },
          }}
          component={NavLink}
          to="/catalog"
        >
          Catalog
        </Button>
        <Button
          sx={{
            color: '#fff',
            '&.active': {
              textDecoration: 'underline',
            },
            '&:hover,:focus': { boxShadow: '2', textDecoration: 'underline' },
          }}
          component={NavLink}
          to="/favorites"
        >
          Favorites
        </Button>
    </Box>
  );
};