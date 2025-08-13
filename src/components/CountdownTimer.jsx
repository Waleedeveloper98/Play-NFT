import React, { useState, useEffect } from "react";

function CountdownTimer() {
  const [secondsLeft, setSecondsLeft] = useState(80 * 60);

  useEffect(() => {
    if (secondsLeft < 0) return;

    let intervl = setInterval(() => {
      setSecondsLeft((prev) => prev - 1);
    }, 1000);

    return () => {
      clearInterval(intervl);
    };
  }, [secondsLeft]);

  const hours = Math.floor(secondsLeft / 3600);
  const minutes = Math.floor((secondsLeft % 3600) / 60);
  const seconds = Math.floor(secondsLeft % 60);

  const format = (num) => String(num).padStart(2, "0");

  return (
    <div>
      <h1 className="font-medium text-lg mb-3 mt-1">
        {format(hours)}h {format(minutes)}m {format(seconds)}s
      </h1>
    </div>
  );
}

export default CountdownTimer;
