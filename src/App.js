import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Layout";
import WeatherCards from "./components/WeatherCards";
import WeatherDetails from "./components/WeatherDetails";
import fetchCityData from "./utils/fetchCityData";

export default function App() {
  const [cityList, setCityList] = useState([]);
  const [unit, setUnit] = useState("metric"); // metric or imperial
  const [lang, setLang] = useState("en"); // en or fr

  useEffect(() => {
    const fetchData = async () => {
      const initialCity = "Toronto";
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
      setCityList((prevCities) => [...prevCities, newCityData]);
    }
  };
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout
              unit={unit}
              lang={lang}
              setUnit={setUnit}
              setLang={setLang}
              handleClick={handleClick}
            />
          }
        >
          <Route
            index
            element={
              <WeatherCards cityList={cityList} unit={unit} lang={lang} />
            }
          />
          <Route path="/details/:city" element={<WeatherDetails />} />
        </Route>
      </Routes>
    </Router>
  );
}
