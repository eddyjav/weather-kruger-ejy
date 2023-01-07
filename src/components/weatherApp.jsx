import { useEffect } from "react";
import { useState } from "react";
import WeatherForm from "./weatherForm";
import WheaterMainInfo from "./weathreMainInfo";
import styles from "./weatherApp.module.css";

export default function WeatherApp() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    loadInfo();
  }, []);

  useEffect(() => {
    document.title = `Weather | ${weather?.location.name ?? ""}`;
  }, [weather]);

  const loadInfo = async (city = "london") => {
    try {
      const request = await fetch(
        `${process.env.REACT_APP_URL}&key=${process.env.REACT_APP_KEY}&q=${city}`
      );

      const json = await request.json();

      setTimeout(() => {}, 2000);

      setWeather(json);

      console.log(json);
    } catch (error) {}
  };

  const handleChanceCity = (city) => {
    setWeather(null);
    loadInfo(city);
  };

  return (
    <div className={styles.weatherContainer}>
      <WeatherForm onChangeCity={handleChanceCity} />
      <WheaterMainInfo weather={weather} />
    </div>
  );
}
