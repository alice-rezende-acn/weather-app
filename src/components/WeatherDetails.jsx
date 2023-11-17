import React from "react";
import { useParams, useSearchParams } from "react-router-dom";
import Weather from "./Weather";

export default function WeatherDetails() {
  const { city } = useParams();
  let [searchParams] = useSearchParams();
  const cityData = Object.fromEntries([...searchParams]);
  const { lat, long, unit, lang } = cityData;

  return (
    <div className="weather-details-container">
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
