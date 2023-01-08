import { useEffect } from "react";
import { useState } from "react";
import WeatherForm from "./weatherForm";
import WheaterMainInfo from "./weathreMainInfo";
// import styles from "./weatherApp.module.css";
import "../styles/styles.css";
import Loading from "./loading";

export default function WeatherApp() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    loadInfo();
  }, []);

  useEffect(() => {
    document.title = `Weather | ${weather?.location.name ?? ""}`;
  }, [weather]);

  const loadInfo = async (city = "quito") => {
    try {
      const request = await fetch(
        `${process.env.REACT_APP_URL}&key=${process.env.REACT_APP_KEY}&q=${city}`
      );

      console.log(request.status);

      if (request.status !== 200) {
        return console.log("NO existe la ciudad");
      }

      const json = await request.json();

      setTimeout(() => {}, 2000);

      setWeather(json);

      // console.log(json);
    } catch (error) {}
  };

  const handleChanceCity = (city) => {
    setWeather(null);
    loadInfo(city);
  };

  return (
    <div className="w-container">
      {/* <Loading /> */}
      <WeatherForm onChangeCity={handleChanceCity} />
      {weather ? <WheaterMainInfo weather={weather} /> : <Loading />}
    </div>
  );
}
