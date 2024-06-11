import { useState } from "react";
import Search from "./Search";
import ShowCard from "./ShowCard";

export default function WeatherApp() {

    const Show = {
        city: "Delhi",
        temp: 24,
        tempMin: 25,
        tempMax: 25,
        humidity: 25,
        feels_like: 47,
        weather: "haze"
    };

    const [weather, setWeather] = useState(Show)

    const updateInfo = (result) => {
        setWeather(result);
    };

    return (
        <div>
            <h1>Weather App</h1>
            <Search updateInfo={updateInfo} />
            <ShowCard Show={weather} />
        </div>
    );
};