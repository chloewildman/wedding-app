import { useState, useEffect } from "react";

const targetDate = new Date("Sept 3, 2026").getTime();

function Countdown() {
  const [timeLeft, setTimeLeft] = useState(getTimeDifference(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeDifference(targetDate));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="Countdown">
      <p>
        {timeLeft.days} days - {timeLeft.hours.toString().padStart(2, '0')}:{timeLeft.minutes.toString().padStart(2, '0')}:{timeLeft.seconds.toString().padStart(2, '0')}
      </p>
    </div>
  );
}

function getTimeDifference(targetDate) {
  const now = new Date().getTime();
  const difference = targetDate - now;
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);
  return { days, hours, minutes, seconds };
}

export default Countdown;
