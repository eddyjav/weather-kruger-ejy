export default function WheaterMainInfo({ weather }) {
  console.log(weather?.location.lon + "  " + weather?.location.lat);
  return (
    <div>
      <div>{weather?.location.name}</div>
      <div>{weather?.location.country}</div>
      <div>
        <div>
          <img
            src={`http:${weather?.current.condition.icon}`}
            width="128"
            alt={weather?.current.condition.text}
          />
        </div>
        <div>
          <div>{weather?.current.condition.text}</div>
          <div>{weather?.current.temp_c}°</div>
        </div>
      </div>
      <iframe
        src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317715.7119527189!2d${weather?.location.lon}!3d${weather?.location.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x!2s${weather?.location.name}!5e0!3m2!1ses-419!2sec!4v1672962393864!5m2!1ses-419!2sec`}
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
