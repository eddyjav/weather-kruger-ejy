import { useEffect } from "react";
import { useState } from "react";
import WeatherForm from "./weatherForm";
import WheaterMainInfo from "./weathreMainInfo";
import Swal from "sweetalert2";
// import styles from "./weatherApp.module.css";
import "../styles/styles.css";
import Loading from "./loading";
import storm from "../img/Storm.gif";

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

      if (request.status !== 200) {
        Swal.fire({
          title: "Error!",
          text: "No existe la ciudad ingresada!",
          iconHtml: '<img src="https://i.postimg.cc/5yHGn8bN/Storm.gif">',
          confirmButtonText: "Ok",
          customClass: {
            icon: "no-border",
          },
        });
        return loadInfo("quito");
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
