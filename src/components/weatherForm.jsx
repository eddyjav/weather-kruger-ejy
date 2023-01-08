import { useState } from "react";
// import styles from "./weatherForm.module.css";
import "../styles/styles.css";

export default function WeatherForm({ onChangeCity }) {
  const [city, setCity] = useState("second");

  const onChange = (e) => {
    const value = e.target.value;

    if (value !== "") {
      setCity(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onChangeCity(city);
  };

  return (
    <form onSubmit={handleSubmit} className="w-form-container">
      <input
        type="text"
        onChange={onChange}
        className="w-input"
        placeholder="Ingresa una Ciudad"
        autoFocus
      />
    </form>
  );
}
