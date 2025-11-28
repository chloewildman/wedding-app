import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";
import Countdown from "./components/Countdown.jsx";
import Home from "./pages/Home.jsx";
import OurStory from "./pages/OurStory.jsx";
import Location from "./pages/Location.jsx";
import Itinerary from "./pages/Itinerary.jsx";
import Gallery from "./pages/Gallery.jsx";
import Rsvp from "./pages/Rsvp.jsx";

function App() {
  return (
    <div>
      <header id="#top">
        <img src="./images/headerAlt.png" alt="'Michael and Chloe' in cursive."></img>
        <input type="checkbox" id="navButton" className="navButton"></input>
        <label htmlFor="navButton" className="navIcon">☰ Menu</label>
        <nav>
          <ul className="navBar">
            <li><NavLink to="/" className="navLink">Home</NavLink></li>
            <li><NavLink to="/story" className="navLink">Our Story</NavLink></li>
            <li><NavLink to="/location" className="navLink">Location</NavLink></li>
            <li><NavLink to="/itinerary" className="navLink">Itinerary</NavLink></li>
            <li><NavLink to="/gallery" className="navLink">Gallery</NavLink></li>
            <li><NavLink to="/rsvp" className="navLink">RSVP</NavLink></li>
          </ul>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/story" element={<OurStory />} />
          <Route path="/location" element={<Location />} />
          <Route path="/itinerary" element={<Itinerary />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/rsvp" element={<Rsvp />} />
        </Routes>
        <div className="CountdownContainer">
          <h1>
            Wedding Countdown
          </h1>
          <Countdown />
        </div>

      </main>
      <footer>
        &copy; 2025 Chloe Wildman - All rights reserved
        <hr></hr>
        <a href="#top" className="toTop">Back to Top</a>
      </footer>
    </div>

  );
}

export default App;

