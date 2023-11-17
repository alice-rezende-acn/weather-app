import React, { useState, useEffect } from "react";
import ReactWeather, {useOpenWeather} from "react-open-weather";
import { useParams } from "react-router-dom";


export default function WeatherDetails() {
const { city, lat, long, unit, lang } = useParams();
const [unitsLabels, setUnitsLabels] = useState({ tempLabel: "C", windLabel: "Km/h" });
  useEffect(() => {
    if (unit === "imperial") {
      setUnitsLabels({
        tempLabel: "F",
        windLabel: "Miles/h",
      });
    } else {
      setUnitsLabels({
        tempLabel: "C",
        windLabel: "Km/h",
      });
    }
  }, [unit]);   
  const { tempLabel, windLabel } = unitsLabels;
  const { data, isLoading, errorMessage } = useOpenWeather({
    key: process.env.REACT_APP_API_KEY,
    lat: lat,
    lon: long,
    lang: lang,
    unit: unit, // values are (metric, standard, imperial)
    });
  return (
    <ReactWeather
      isLoading={isLoading}
      errorMessage={errorMessage}
      data={data}
      lang={lang}
      locationLabel={city}
      unitsLabels={{ temperature: tempLabel, windSpeed: windLabel }}
      showForecast={true}
    />
  );
}
