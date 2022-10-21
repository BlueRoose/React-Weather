import React from "react";
import styles from "./GeneralInfo.module.scss";

function GeneralInfo(props) {
  function getDate() {
    const data = new Date();
    let day = "";
    switch (data.getDay()) {
      case 1:
        day = "Monday";
        break;
      case 2:
        day = "Tuesday";
        break;
      case 3:
        day = "Wednesday";
        break;
      case 4:
        day = "Thursday";
        break;
      case 5:
        day = "Friday";
        break;
      case 6:
        day = "Saturday";
        break;
      case 7:
        day = "Sunday";
        break;
    }
    let min = data.getMinutes();
    if (min.length == 1) {
      min = "0" + min;
    }
    return data.getHours() + ":" + min + " - " + day + ", " + data.getDate() + "." + (data.getMonth() + 1)
  }

  function getImage(str) {
    if (str == "Snow") {
      return "img/snow.svg";
    } else if (str == "Clouds") {
      return "img/cloudy.svg";
    } else if (str == "Rain") {
      return "img/drizzle.svg";
    } else if (str == "Clear") {
      return "img/sunny.svg";
    }
  }

  function getBackground(str) {
    if (str == "Snow") {
      return "img/snow.gif";
    } else if (str == "Clouds") {
      return "img/cloudy.gif";
    } else if (str == "Rain") {
      return "img/rain.gif";
    } else if (str == "Clear") {
      return "img/sun.gif";
    }
  }

  return (
    <div
      className={styles.general}
      style={{ backgroundImage: `url(${getBackground(props.general)})` }}
    >
      <div className={styles.head}>
        <h2>React Weather</h2>
      </div>
      <div className={styles.info}>
        <h1>{Math.round(((props.temp - 32) * 5) / 9)}°C</h1>
        <ul>
          <li>
            <h2>{props.city}</h2>
          </li>
          <li>
            <h5>{getDate()}</h5>
          </li>
        </ul>
        <ul>
          <li>
            <img
              src={getImage(props.general)}
              width={64}
              height={64}
              alt="img"
            />
          </li>
          <li>
            <h4>{props.general}</h4>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default GeneralInfo;
