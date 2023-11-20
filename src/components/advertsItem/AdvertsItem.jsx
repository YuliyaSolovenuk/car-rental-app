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
    <Card>
      <CardMedia
        sx={{ height: 268, objectFit: 'cover' }}
        image={img}
        alt={make}
      />
      <CardContent>
        <FavoriteIcon />
        <Box sx={{ display: 'flex'}}>
        <Typography gutterBottom variant="h6" component="div">
          {make} | {model}, {year}
        </Typography>
        <Typography sx={{ marginLeft: 'auto'}} gutterBottom variant="h5" component="div">
          {rentalPrice}
        </Typography>
        </Box>
        <Typography variant="p" color="text.secondary">
          {formatAddress(address)} | {rentalCompany}
        </Typography>
        <Typography variant="p" color="text.secondary">
          {type} | {mileage} | {functionalities[0]}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          size="small"
          sx={{ textTransform: 'none', width: '100%' }}
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default AdvertsItem;
