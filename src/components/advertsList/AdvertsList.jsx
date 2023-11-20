import * as React from 'react';
// import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import AdvertsItem from 'components/advertsItem/AdvertsItem';

// const AdvertsItem = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//     ...theme.typography.body2,
//     padding: theme.spacing(2),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   }));

const AdvertsList = ({adverts}) =>{

    return(
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 12, sm: 12, md: 12 }}>
          {adverts.map((advert, index) => (
            <Grid item xs={1} sm={3} md={3} key={index}>
              <AdvertsItem advert={advert}>xs=2</AdvertsItem>
            </Grid>
          ))}
        </Grid>
      </Box>
    )
}

export default AdvertsList;