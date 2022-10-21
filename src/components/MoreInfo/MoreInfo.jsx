import React from "react";
import styles from "./MoreInfo.module.scss";

function MoreInfo(props) {
  const [input, setInput] = React.useState("");

  const handleClear = (e) => {
    e.preventDefault();
    setInput("");
    props.updateData(input);
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.top}>
        <form>
          <input
            className={styles.colortext}
            type="text"
            placeholder="Another location"
            value={input}
            onChange={handleChange}
          />
        </form>
        <img src="img/search.svg" alt="search" onClick={handleClear} />
      </div>
      <div className={styles.mid}>
        <h3 onClick={() => props.updateData("Hrodna")}>Hrodna</h3>
        <h3 onClick={() => props.updateData("Minsk")}>Minsk</h3>
        <h3 onClick={() => props.updateData("Moscow")}>Moscow</h3>
        <h3 onClick={() => props.updateData("Kiev")}>Kiev</h3>
      </div>
      <hr />
      <div className={styles.low}>
        <h3>Weather Details</h3>
        <ul>
          <li>Cloudy</li>
          <li>{props.cloudy}%</li>
        </ul>
        <ul>
          <li>Humidity</li>
          <li>{props.humidity}%</li>
        </ul>
        <ul>
          <li>Wind</li>
          <li>{Math.round(props.wind)} km/h</li>
        </ul>
        <ul>
          <li>Pressure</li>
          <li>{props.pressure} Pa</li>
        </ul>
      </div>
      <hr />
    </div>
  );
}

export default MoreInfo;
