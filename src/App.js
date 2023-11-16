import React, { useEffect, useState } from "react";
import './App.css';
import Weather from "./components/Weather";
import Search from "./components/Search";
import ToggleButtons from "./components/ToggleButtons";
import fetchCityData from "./utils/fetchCityData";

export default function App() {
  const [cityList, setCityList] = useState([]);
  const [unit, setUnit] = useState('metric'); // metric or imperial
  const [lang, setLang] = useState('en'); // en or fr

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

  return (
    <div className="App">
      <div className="action-bar">
        <div className="weather-system">
          <ToggleButtons 
            currentValue={unit}
            options={[
              { value: "metric", label: "°C" },
              { value: "imperial", label: "°F" }
            ]}
            onToggle={setUnit}
          />
        </div>
        <Search onClickHandle={handleClick} />
        <div className="weather-system">
          <ToggleButtons
            currentValue={lang}
            options={[
              { value: "EN", label: "EN" },
              { value: "FR", label: "FR" }
            ]}
            onToggle={setLang}
          />
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