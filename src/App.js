import React from "react";
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';

// Components
import Header from "./components/Header"
import CityInfo from "./views/CityInfo";
import Home from "./views/Home"

// Styles

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/"element={<Home/>}/>
        </Routes>
        <Routes>
          <Route path="/:city" element={<CityInfo/>}/>
        </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
