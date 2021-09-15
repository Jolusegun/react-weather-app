import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  return (
    <div className="WeatherForecastDay">
      <div className="WeatherForecast-day">{props.data.dt}</div>
      <WeatherIcon code={props.data.weather[4].icon} size={34} />
      <div className="WeatherForecast-temperatures">
        <span className="WeatherForecast-max">
          {Math.round(props.data.temp.max)}°
        </span>
        <span className="WeatherForecast-min">
          {Math.round(props.data.temp.min)}°
        </span>
      </div>
    </div>
  );
}
