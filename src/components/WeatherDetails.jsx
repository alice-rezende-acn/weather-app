import React from "react";
import { useParams, useSearchParams } from "react-router-dom";
import Weather from "./Weather";

export default function WeatherDetails({ unit, lang }) {
  const { city } = useParams();
  let [searchParams] = useSearchParams();
  const cityData = Object.fromEntries([...searchParams]);
  const { lat, long } = cityData;

  return (
    <div key={unit + lang} className="weather-details-container">
      <Weather
        lat={lat}
        long={long}
        city={city}
        unit={unit}
        lang={lang}
        showForecast={true}
      />
    </div>
  );
}
