import Weather from "./Weather";

export default function WeatherCards({ cityList, unit, lang }) {
  return (
    <div className="weather-cards-container">
      {cityList.map((city, index) => (
        <Weather
          key={unit + lang + index}
          lat={city.lat}
          long={city.long}
          city={city.city}
          unit={unit}
          lang={lang}
        />
      ))}
    </div>
  );
}
