import Weather from "./Weather";
import { useNavigate } from "react-router-dom";

export default function WeatherCards({ cityList, unit, lang }) {
  const navigate = useNavigate();
  const showDetails = (city, lat, long) => {
    navigate(`/details/${city}?lat=${lat}&long=${long}`);
  };
  return (
    <div className="weather-cards-container">
      {cityList.map((city, index) => (
        <div
          className="weather-card-container"
          onClick={() => showDetails(city.city, city.lat, city.long)}
        >
          <Weather
            key={unit + lang + index}
            lat={city.lat}
            long={city.long}
            city={city.city}
            unit={unit}
            lang={lang}
          />
        </div>
      ))}
    </div>
  );
}
