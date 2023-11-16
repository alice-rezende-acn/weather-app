import React, { useEffect, useState } from "react";
import './App.css';
import Weather from "./components/weather";
import Search from "./components/search";
import axios from "axios";

export default function App() {
  const [cityInfos, setCityInfos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const initialCity = 'Toronto';
        try {
          const data = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${initialCity}&limit=1&appid=${process.env.REACT_APP_API_KEY}`);
          setCityInfos([{
            lat: data.data[0].lat,
            long: data.data[0].lon,
            city: initialCity
          }]);
        } catch (error) {
          console.error("Error fetching initial city data", error);
        }
      });
    };
    fetchData();
  }, []);

  const handleClick = async (e) => {
    e.preventDefault();
    const cityValue = e.target.elements.city.value;
    try {
      const data = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${cityValue}&limit=1&appid=${process.env.REACT_APP_API_KEY}`);
      const newCityInfo = {
        lat: data.data[0].lat,
        long: data.data[0].lon,
        city: cityValue
      };
      setCityInfos(prevInfos => [...prevInfos, newCityInfo]);
      e.target.elements.city.value = "";
    } catch (error) {
      alert("City not found. Please try again.");
      console.error("Error fetching data for city", cityValue, error);
    }
  };

  return (
    <div className="App">
      <Search onClickHandle={handleClick} />
      <div className="weather-cards-container">
      {cityInfos.map((info, index) => (
        <Weather key={index} lat={info.lat} long={info.long} city={info.city} />
      ))}
      </div>
    </div>
  );
}