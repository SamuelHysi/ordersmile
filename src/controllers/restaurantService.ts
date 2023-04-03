import axios from 'axios';

const API_BASE_URL = 'https://qa.ordersmile.com/api/v1';
const LOCATION = { latitude: 41.3338836, longitude: 19.8151839 }; // Tirana location

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  params: {
    latitude: LOCATION.latitude,
    longitude: LOCATION.longitude
  }
});

api.interceptors.response.use(
  (response) => response.data,
  (error) => {
    console.error(error);
    return Promise.reject(error);
  }
);

const getCategories = async (restaurantId: number) => {
  try {
    const response: any = await api.get(`/restaurant/${restaurantId}/categories`);
    return response.categories;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const getRestaurants = async () => {
  try {
    const response: any = await api.post('/network/1/restaurants');
    return response.restaurants;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export { getCategories, getRestaurants };
