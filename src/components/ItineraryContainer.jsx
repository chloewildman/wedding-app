import React, { useEffect, useState } from "react";

const apiURL = "./data/schedule.json";

function ItineraryContainer() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    async function fetchSchedule() {
      try {
        const res = await fetch(apiURL);
        const data = await res.json();
        setEvents(data);
      } catch (err) {
        console.error(err);
      }
    }
    fetchSchedule();
  }, []);

  return <Itinerary events={events} />;
}

function Itinerary({ events }) {
  // Split events by day
  const day1Events = events.filter(event => event.day === 1);
  const day2Events = events.filter(event => event.day === 2);

  return (
    <div className="Itinerary">
      <h2>Day 1</h2>
      <ItineraryList events={day1Events} />

      <h2>Day 2</h2>
      <ItineraryList events={day2Events} />
    </div>
  );
}

function ItineraryEvent({ time, activity }) {
  return (
    <div className="ItineraryEvent">
      <p className="time">{time}</p>
      <p className="activity">{activity}</p>
    </div>
  );
}

function ItineraryList({ events }) {
  return (
    <ul className="ItineraryList">
      {events.map(event => (
        <li key={event.id}>
          <ItineraryEvent {...event} />
        </li>
      ))}
    </ul>
  );
}
export default ItineraryContainer;
