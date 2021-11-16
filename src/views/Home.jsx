import React, { useEffect, useState } from "react";

// Components

import Header from "../components/Header"
import SearchForm from "../components/Home/SearchForm"
import PreviewCity from "../components/Home/PreviewCity";
import FetchError from "../components/Home/FetchError";


const Home = props => {

    const [city, setCity] = useState();
    const [weatherDetails, setWeatherDetails] = useState();
    const [error, setError] = useState(false)
    

    const fetchWeatherAPI = async () => {

        try {
            const response = await fetch (
                `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=24a72b5d54470ac4ea80745510b6d813`
            );
            // console.log(response)
            const result = await response.json();
            console.log(result)

            if (result.message) {
                setError(result.message)
            }else {
                setWeatherDetails(result)
                setError(false)
            }
            
            
            
        } catch (error) {
            console.log(error)
        }
        
    };

    // useEffect(()=> {
    //         fetchWeatherAPI();
        
    // }, []);

    const handleChange = ({value}) => {
        setCity(value)
        }

    const handleSearchCity = (e) => {
        e.preventDefault();
        fetchWeatherAPI();
        }

    return(
        <div>
            <Header/>
            <SearchForm
                handleChange={handleChange}
                handleSearchCity={handleSearchCity}
            />

            {
                error ? <FetchError message={error}/>

                :  weatherDetails ?

                   <PreviewCity
                        city={weatherDetails.name}
                        temp = {weatherDetails.main.temp}
                   />
                : null

            }
            
        </div>
    );
}

export default Home;