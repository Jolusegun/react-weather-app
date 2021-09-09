import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter your City or State.."
              className="form-control"
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-secondary btn-md w-100"
            />
          </div>
        </div>
      </form>
      <h1>Nashville</h1>
      <ul className="Description">
        <li>Thursday, September 09, 2021, 00:27:25</li>
        <li>Mostly Cloudy with Light Rain</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="Partly Cloudy"
            id="icon"
            className="float-left"
          />

          <span className="temperature">8</span>
          <span className="unit">°F</span>
        </div>
        <div className="col-6">
          <ul>
            <li> Precipitation: 60%</li>
            <li>Humidity: 72%</li>
            <li>Wind: 10 m/kh</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
