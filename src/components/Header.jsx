import { Link } from "react-router-dom"
import "../styles/Header.css"
const Header = (props) => {

    return (
      <header className="normal-header">
        <ul>
          <li>
            <Link to="/"><h2>WEATHER APP</h2></Link>
          </li>
        </ul>
      </header>
    );
  };

export default Header;