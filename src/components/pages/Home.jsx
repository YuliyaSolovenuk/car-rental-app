import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Home = () => {
  return (
    <div className='homeContainer'>
    <Box
    align="right"
      sx={{
        height: '100vh',
        width: '100vw',
        overflow: 'hidden',
        marginTop: '150px',
        //  bgcolor: 'w#0000ff',
        p: 2,
      }}
    >
      <Typography
        variant="h2"
        color="inherit"
        align="center"
        component="h1"
        sx={{
          width: '800px',
          paddingTop: '70px',
          p: 1,
        }}
      >
        Welcome to "Comfort Travel"!
      </Typography>
      <Typography
        variant="body1"
        color="inherit"
        align="center"
        component="p"
        sx={{
          width: '500px',
          marginTop: '50px',
          p: 1,
        }}
      >
        Discover the freedom to explore with our premier car rental services
        across Ukraine. At Comfort Travel, we offer a diverse fleet of vehicles
        and exceptional service to enhance your travel experience. Whether
        you're looking for short-term rentals or planning a long adventure, we
        provide reliable vehicles and hassle-free rental solutions. Embrace
        convenience and comfort as you journey through Ukraine. Your exploration
        starts here!
      </Typography>
    </Box>
    </div>
  );
};

export default Home;
