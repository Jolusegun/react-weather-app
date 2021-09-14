import React from "react";
import UpdateDate from "./UpdateDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function Weatherlot(props) {
  return (
    <div className="Weatherlot">
      <h1>{props.data.city}</h1>
      <ul className="Description">
        <li>
          <UpdateDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <WeatherIcon code={props.data.icon} />
          <WeatherTemperature fahrenheit={props.data.temperature} />
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: {Math.round(props.data.precipitation)}%</li>
            <li>Humidity: {Math.round(props.data.humidity)}%</li>
            <li>Wind: {Math.round(props.data.wind)} m/kh</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
