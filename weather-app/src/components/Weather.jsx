import React from "react";
import "./Weather.css";
import search_icon from "../assets/search.png";
import clear_icon from "../assets/clear.png";
import cloud_icon from "../assets/cloudy.png";
import drizzle_icon from "../assets/drizzle.png";
import rain_icon from "../assets/rainy.png";
import snow_icon from "../assets/snow.png";
import wind_icon from "../assets/windy.png";
import humidity_icon from "../assets/humidity.png";

const Weather = () => {
  return (
    <div className="weather">
      <div className="search-bar">
        <input type="text" placeholder="Search city" />
        <img src={search_icon} alt="" />
      </div>
      <img src={clear_icon} alt="" className="weather-image" />
      <p className="temprature">16 degree celcius</p>
      <p className="location">Kannur</p>
      <div className="row">
        <div className="humidity">
          <img src={humidity_icon} alt="" />
        </div>
        <div className="wind-speed">
          <img src={wind_icon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Weather;
