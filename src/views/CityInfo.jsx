import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// Components
import Header from "../components/Header"
import Loader from "../components/Loader";
import CityWeather from "../components/CityInfo/CityWeather";
import FetchError from "../components/Home/FetchError";

const CityInfo = props => { 

    const { city } = useParams();
    const [dataWeather, setDataWeather] = useState();
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    const fetchDataWeather = async () => {

        try {
            const response = await fetch (
                `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=24a72b5d54470ac4ea80745510b6d813`
            );
            // console.log(response)
            const result = await response.json();
            console.log(result)
            if (result.message) {
                setError(result.message)
                setLoading(false)
            }else {
                setDataWeather(result)
                setLoading(false)
                setError(false)
            }            
            
        } catch (error) {
            console.log(error)
        }
        
    };

    useEffect(()=> {
        fetchDataWeather();
    }, []);

return (
    <div>
        <Header/>

        {
           loading ?  <Loader/> 
           : error ? <FetchError message={error}/>

           :
            <CityWeather
                city={city}
                feelsLike={dataWeather.main.feels_like}
                humidity={dataWeather.main.humidity}
                pressure={dataWeather.main.pressure}
                tMax={dataWeather.main.temp_max}
                tMin={dataWeather.main.temp_min}
                decription={dataWeather.weather[0].description}
                icon={dataWeather.weather[0].icon}
                windDirection={dataWeather.wind.deg}
                windSpeed={dataWeather.wind.speed}
                time={dataWeather.dt}
                temp={dataWeather.main.temp}
            />
        }

    </div>
)
}

export default CityInfo;
