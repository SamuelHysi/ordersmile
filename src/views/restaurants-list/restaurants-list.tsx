import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import SearchComponent from './search/search';
import { useState, useEffect} from 'react';
import { getRestaurants } from "../../controllers/restaurantService";  
import './restaurants-list.css';

const RestaurantLists = () => {
  const [restaurants, setRestaurants] = useState<any[]>([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    const fetchRestaurants = async () => {
      const data = await getRestaurants(); // data from backend
      setRestaurants(data);
    };
    fetchRestaurants();
  }, []);

  const handleSearch = (text: string) => {
    setSearchText(text);
  }

  const filteredRestaurants = restaurants?.filter(restaurant => {
    return restaurant.name.toLowerCase().includes(searchText.toLowerCase())
  });

    
  return (
    <div className="main-container">
      <div className="search-contrainer">
        <h1 className="site-title">Order Smile</h1>
          <SearchComponent onSearch={handleSearch}/>
      </div>
      <div className="restorants-list">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2} justifyContent="center">
            {filteredRestaurants?.map((card, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Link to={`/restaurants/${card.id}/categories`} className="link-card" style={{ textDecoration: 'none' }} state={{ id: card.id }}>
                    <Card>
                      <CardContent>
                        <Typography variant="h5" component="h2" gutterBottom>
                          {card.name}
                        </Typography>
                        <Typography variant="caption" component="p">
                          Timezone: {card.timezone}
                        </Typography>
                        <Typography variant="caption" component="p">
                          Address: {card.address.city}, {card.address.street}, {card.address.country}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Link>
                </Grid>
            ))}
          </Grid>
        </Box>
      </div>
    </div>
  );
  };
  
  export default RestaurantLists;