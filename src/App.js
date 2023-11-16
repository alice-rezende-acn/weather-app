import React, { useEffect, useState } from "react";
import './App.css';
import Weather from "./components/weather";
import Search from "./components/search";
import fetchCityData from "./utils/fetchCityData";

export default function App() {
  const [cityList, setCityList] = useState([]);
  const [unit, setUnit] = useState('metric'); // metric or imperial
  const [lang, setLang] = useState('en'); // metric or imperial

  useEffect(() => {
    const fetchData = async () => {
      const initialCity = 'Toronto';
      const cityData = await fetchCityData(initialCity);
      if (cityData) {
        setCityList([cityData]);
      }
    };
    fetchData();
  }, []);

  const handleClick = async (e) => {
    e.preventDefault();
    const cityValue = e.target.elements.city.value;
    const newCityData = await fetchCityData(cityValue);
    if (newCityData) {
      setCityList(prevCities => [...prevCities, newCityData]);
    }
  };
  
  const toggleUnit = (unit) => setUnit(unit)
  const toggleLang = (lang) => setLang(lang)


  return (
    <div className="App">
      <div className="action-bar">
        <div className="weather-system">
          <button onClick={() =>toggleLang("EN")}> EN </button>
          <span> | </span>
          <button onClick={() => toggleLang("FR")}> FR</button>
        </div>
        <Search onClickHandle={handleClick} />
        <div className="weather-system">
          <button onClick={() =>toggleUnit("metric")}> °C </button>
          <span> | </span>
          <button onClick={() => toggleUnit("imperial")}> °F </button>
        </div>
      </div>
      <div className="weather-cards-container">
        {cityList.map((city, index) => (
          <Weather key={unit+lang+index} lat={city.lat} long={city.long} city={city.city} unit={unit} lang={lang}/>
        ))}
      </div>
    </div>
  );
}