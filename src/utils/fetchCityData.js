import axios from 'axios';

export default async function fetchCityData (cityName) {
    try {
      const response = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${process.env.REACT_APP_API_KEY}`);
      if (response.data && response.data.length > 0) {
        return {
          lat: response.data[0].lat,
          long: response.data[0].lon,
          city: cityName
        };
      } else {
        throw new Error('City not found');
      }
    } catch (error) {
      console.error(`Error fetching data for ${cityName}`, error);
      alert(`Error fetching data for ${cityName}: ${error}`);
      return null;
    }
  }; 