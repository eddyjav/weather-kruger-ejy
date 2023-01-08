import clean from "../img/clean.gif";
import rain from "../img/rain.gif";
import sunny from "../img/sunny.gif";
import cloudy from "../img/cloudy.gif";
import Fog from "./weatherIcons/fog";
import Overcast from "./weatherIcons/overcast";

export default function WheaterMainInfo({ weather }) {
  // console.log(weather?.location.lon + "  " + weather?.location.lat);

  function Animated() {
    switch (!!weather) {
      case (weather?.current.condition.text).includes("Clear"):
        return <img src={clean} alt="123" width="64" />;
        break;
      case (weather?.current.condition.text).includes("rain"):
        return <img src={rain} alt="123" width="64" />;
        break;
      case (weather?.current.condition.text).includes("Sunny"):
        return <img src={sunny} alt="123" width="64" />;
        break;
      case (weather?.current.condition.text).includes("Cloudy"):
        return <img src={cloudy} alt="123" width="64" />;
        break;
      case (weather?.current.condition.text).includes("drizzle"):
        return <img src={rain} alt="123" width="64" />;
        break;
      case (weather?.current.condition.text).includes("Mist"):
        return <Fog />;
        break;
      case (weather?.current.condition.text).includes("Overcast"):
        return (
          <div className="icon-w">
            <Overcast />
          </div>
        );
        break;

      default:
        break;
    }
  }

  return (
    <div className="w-info-container ">
      <div className="w-legend-container">
        <div style={{ textAlign: "center" }}>
          {/* <hr /> */}
          <Animated />
          <h5>
            {weather?.location.name} - {weather?.location.country}
          </h5>
          <hr className="w-hr-info" />
        </div>
        <div className="w-info-legend">
          <div>
            <div>
              <h5>{weather?.current.condition.text}</h5>
            </div>
            <div>
              <h5>{weather?.current.temp_c}°</h5>
            </div>
          </div>
          <div>
            <img
              src={`http:${weather?.current.condition.icon}`}
              width="64"
              alt={weather?.current.condition.text}
            />
          </div>
        </div>
      </div>

      <iframe
        className="frame"
        src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317715.7119527189!2d${weather?.location.lon}!3d${weather?.location.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x!2s${weather?.location.name}!5e0!3m2!1ses-419!2sec!4v1672962393864!5m2!1ses-419!2sec`}
        // width="600"
        // height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
