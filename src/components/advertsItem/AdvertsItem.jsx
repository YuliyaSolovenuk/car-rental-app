import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Box from '@mui/material/Box';

const AdvertsItem = ({ advert }) => {
  const {
    img,
    make,
    model,
    year,
    rentalPrice,
    address,
    rentalCompany,
    type,
    mileage,
    functionalities,
  } = advert;

  const formatAddress = address => {
    const arrAddress = [...address.split(',')];
    arrAddress.splice(0, 1);
    return arrAddress.join(' | ');
  };

  return (
    <Card
      sx={{ height: 426, backgroundColor: 'transparent', boxShadow: 'none' }}
    >
      <FavoriteIcon sx={{ position: 'absolute' }} />
      <CardMedia
        sx={{
          height: 268,
          objectFit: 'cover',
          position: 'relative',
          borderRadius: '14px',
          marginBottom: '14px',
        }}
        component="img"
        image={img}
        alt={make}
      />
      <CardContent sx={{ padding: 0 }}>
        <Box
          sx={{
            display: 'flex',
            marginBottom: '8px',
            fontSize: '16px',
            color: 'rgba(18, 20, 23)',
          }}
        >
          <Typography variant="h6" component="div">
            {make}
          </Typography>
          {model.length < 8 ? (<Typography
            sx={{
              color: 'rgba(52, 112, 255, 1)',
            }}
            variant="h5"
            component="div"
          >
            &nbsp;{model}
          </Typography>) : ""}
          <Typography variant="h6" component="div">
            ,&nbsp;{year}
          </Typography>
          <Typography
            sx={{
              marginLeft: 'auto',
            }}
            variant="h6"
            component="div"
          >
            {rentalPrice}
          </Typography>
        </Box>
        <Box
          sx={{
            marginBottom: '28px',
            fontSize: '12px',
            color: 'rgba(18, 20, 23, 0.5)',
          }}
        >
          <Typography sx={{ marginBottom: '4px' }} variant="p" component="div">
            {formatAddress(address)} | {rentalCompany}
          </Typography>
          {model.length > 8 ? (<Typography variant="p" component="div">
            {type} | {model} | {mileage} | {functionalities[0]}
          </Typography>): (<Typography variant="p" component="div">
            {type} | {mileage} | {functionalities[0]}
          </Typography>)}
        </Box>
      </CardContent>
      <CardActions
        sx={{
          padding: 0,
        }}
      >
        <Button
          variant="contained"
          size="small"
          sx={{
            textTransform: 'none',
            padding: 0,
            height: 44,
            width: '100%',
            borderRadius: '12px',
          }}
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default AdvertsItem;
