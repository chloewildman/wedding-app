import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";
import { useState, useEffect } from 'react';
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Countdown from "./components/Countdown.jsx";
import Popup from "./components/Popup.jsx";
import ToTop from "./components/ToTop.jsx";
import Home from "./pages/Home.jsx";
import OurStory from "./pages/OurStory.jsx";
import Location from "./pages/Location.jsx";
import Itinerary from "./pages/Itinerary.jsx";
import Gallery from "./pages/Gallery.jsx";
import Rsvp from "./pages/Rsvp.jsx";

function App() {
  const [popup, setPopup] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setPopup(true);
    }, 1000);
  }, [])

  return (
    <div>
      <Header></Header>
      <main>
        <ToTop></ToTop>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/story" element={<OurStory />} />
          <Route path="/location" element={<Location />} />
          <Route path="/itinerary" element={<Itinerary />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/rsvp" element={<Rsvp />} />
        </Routes>
        <section className="CountdownContainer">
          <h1 className="countdownTitle">
            Wedding Countdown
          </h1>
          <Countdown />
        </section>

      </main>
      <Footer></Footer>
      <Popup trigger={popup} setTrigger={setPopup}>
      </Popup>
    </div>

  );
}

export default App;

