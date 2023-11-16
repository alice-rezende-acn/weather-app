import ReactWeather, { useOpenWeather } from 'react-open-weather';


export default function Weather({lat, long, city}) {
const { data, isLoading, errorMessage } = useOpenWeather({
    key: process.env.REACT_APP_API_KEY,
    lat: lat,
    lon: long,
    lang: 'en',
    unit: 'metric', // values are (metric, standard, imperial)
    });
  console.log({data, isLoading, errorMessage})
  return (
    <ReactWeather
      isLoading={isLoading}
      errorMessage={errorMessage}
      data={data}
      lang="en"
      locationLabel={city}
      unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
      showForecast
    />
  );
}
