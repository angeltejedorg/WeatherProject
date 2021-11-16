
// Styles
import "../../styles/CityInfo/CityWeather.css"

const CityWeather = ({ 
                        city, 
                        feelsLike, 
                        humidity, 
                        pressure, 
                        tMax, 
                        tMin, 
                        decription, 
                        icon,  
                        windDirection, 
                        windSpeed, 
                        time,
                        temp 
                    }) => { 

    let tempCelsius = temp - 273.15;
    let tempC= tempCelsius.toFixed(1)

    return (
        <div className="information-container">

        <div className="card-cointainer1">
        <h1>{decription}</h1>
        <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="" />
        <p>{tempC} °C <span>{city}</span></p>
        </div>

        <div className="card-cointainer2">
        <p>{(feelsLike-273.15).toFixed(1)} °C<span>Feels like</span></p>
        <p>{(tMin-273.15).toFixed(1)} °C<span>Lowest Temperature</span></p>
        <p>{(tMax-273.15).toFixed(1)} °C<span>Highest Temperature</span></p>
        </div>

       

        <div className="card-cointainer2">
        <p>{humidity} % <span>Humidity</span> </p>
        <p>{windSpeed} m/s  <span>Wind speed</span> </p>
        <p>{windDirection}°  <span>Wind direction</span> </p>
        </div>

        </div>
    )
}

export default CityWeather;
