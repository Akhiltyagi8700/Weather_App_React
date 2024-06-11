
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import "./Search.css";

export default function Search({ updateInfo }) {

    const [city, setCity] = useState("");
    const [error, setError] = useState(false);

    const getWeatherInfo = async () => {

        try {

            const response = await fetch(`https:api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_WEATHER_ID}&units=metric`);


            let jsonResponse = await response.json();

            const result = {
                city: city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feels_like: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description
            };
            console.log(result);
            return result;
        } catch (error) {
            throw error;
        }

    };

    function handleChange(event) {
        setCity(event.target.value)
    };


    const handleSubmit = async (event) => {
        try {
            event.preventDefault();
            console.log(city);
            setCity("");
            let Info = await getWeatherInfo();
            updateInfo(Info);
        } catch (error) {
            setError(true);
        }
    };

    return (
        <div className='Search'>
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="City Name" variant="outlined" value={city} required onChange={handleChange} /><br /><br />
                <Button variant="contained" type='submit'>Search</Button>
                {error && <h3 style={{ color: "red" }}>No such place exists!</h3>}
            </form>
        </div>
    )
}