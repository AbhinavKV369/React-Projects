import React, { useEffect, useRef, useState } from "react";
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

  const inputRef = useRef();
  const [weatherData,setWeatherData] = useState(false);

  const weatherIcons = {
    "01d": clear_icon,
    "01n": clear_icon,
    "02d": cloud_icon,
    "02n": cloud_icon,
    "03d": cloud_icon,
    "03n": cloud_icon,
    "04d": drizzle_icon,
    "04n": drizzle_icon,
    "09d": rain_icon,
    "09n": rain_icon,
    "10d": rain_icon,
    "10n": rain_icon,
    "13d": snow_icon,
    "13n": snow_icon,
  };

  const search = async (city) => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${
        import.meta.env.VITE_API_ID
      }`;
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      if(!response.ok){
        alert(data.message);
        return;
      }
      const icon = weatherIcons[data.weather[0].icon] || clear_icon;
      setWeatherData({
        humidity: data.main.humidity,
        wind_speed: data.wind.speed,
        temprature: Math.floor(data.main.temp),
        location:data.name,
        icon: icon
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(()=>{
    search("Kannur")
  },[])

  return (
    <div className="weather">
      <div className="search-bar">
        <input type="text" placeholder="Search city" ref={inputRef} />
        <img
          src={search_icon}
          alt=""
          onClick={() => {
            search(inputRef.current.value);
          }}
        />
      </div>
      <img src={weatherData.icon} alt="" className="weather-image" />
      <h1 className="temprature">{weatherData.temprature}°C</h1>
      <p className="location">{weatherData.location}</p>
      <div className="row">
        <div className="humidity">
          <img src={humidity_icon} alt="" />
          <div className="col">
            <h2>{weatherData.humidity}</h2>
            <p>Humidity</p>
          </div>
        </div>
        <div className="wind-speed">
          <img src={wind_icon} alt="" />
          <div className="col">
            <h2>{weatherData.wind_speed}</h2>
            <p> Wind speed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
