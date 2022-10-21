import React from "react";
import GeneralInfo from "./components/GeneralInfo/GeneralInfo";
import MoreInfo from "./components/MoreInfo/MoreInfo";
import axios from "axios";
import "./index.scss";

function App() {
  const [temp, setTemp] = React.useState();
  const [general, setGeneral] = React.useState("");
  const [cloudy, setCloudy] = React.useState("");
  const [humidity, setHumidity] = React.useState("");
  const [wind, setWind] = React.useState("");
  const [pressure, setPressure] = React.useState("");
  const [city, setCity] = React.useState("Hrodna");

  function updateData(value) {
    setCity(value);
    fetchData();
  }

  async function fetchData() {
    try {
      const responce = await axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=895284fb2d2c50a520ea537456963d9c&units=metric`
        )
        .then((responce) => {
          setTemp(responce.data.main.temp);
          setGeneral(responce.data.weather[0].main);
          setCloudy(responce.data.clouds.all);
          setHumidity(responce.data.main.humidity);
          setWind(responce.data.wind.speed);
          setPressure(responce.data.main.pressure);
        });
    } catch (error) {
      alert("Ошибка при запросе данных :(");
      console.error(error);
    }
  }
  fetchData();

  return (
    <div className="back">
      <GeneralInfo temp={temp} general={general} city={city} />
      <MoreInfo
        cloudy={cloudy}
        humidity={humidity}
        wind={wind}
        pressure={pressure}
        updateData={updateData}
        city={city}
      />
    </div>
  );
}

export default App;
