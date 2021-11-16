import { Link } from "react-router-dom"
import "../../styles/Home/PreviewCity.css"

const PreviewCity = ({city, temp}) => {

    let celsius = temp -273.15;
    let tempCelsius = celsius.toFixed(2);

    return (
        <div className="preview-cointainer">
        <h1>{city}</h1>
        <p>{tempCelsius} °C</p>
        <button><Link to= {`/${city}`}>SEE MORE</Link></button>

        </div>
    )
}

export default PreviewCity;