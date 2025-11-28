import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Countdown from "./components/Countdown.jsx";
import Home from "./pages/Home.jsx";
import OurStory from "./pages/OurStory.jsx";

function App() {
  return (
    <div>
      <header id="#top">
        <img src="./images/headerAlt.png" alt="'Michael and Chloe' in cursive."></img>
        <input type="checkbox" id="navButton" class="navButton"></input>
        <label for="navButton" class="navIcon">☰ Menu</label>
        <nav>
          <ul className="navBar">
            <li><Link to="/" className="navLink">Home</Link></li>
            <li><Link to="/story" className="navLink">Our Story</Link></li>
            <li><Link to="/location" className="navLink">Location</Link></li>
            <li><Link to="/itinerary" className="navLink">Itinerary</Link></li>
            <li><Link to="/gallery" className="navLink">Gallery</Link></li>
            <li><Link to="/rsvp" className="navLink">RSVP</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Other pages */}
          <Route path="/story" element={<OurStory />} />
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
        <a href="#top" class="toTop">Back to Top</a>
      </footer>
    </div>

  );
}

export default App;

