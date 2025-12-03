import { NavLink } from "react-router-dom";
import "../css/reset.css"
import "../css/style.css"

function Header() {
    return (
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
    )
}

export default Header;