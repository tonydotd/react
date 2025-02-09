import { useEffect, useState } from "react";

export default function QuestionTimer({ timer, onTimeout, mode }) {
  const [remainingTime, setRemaintingTime] = useState(timer);

  useEffect(() => {
    const timeout = setTimeout(onTimeout, timer);
    return () => clearTimeout(timeout);
  }, [timer, onTimeout]);

  useEffect(() => {
    const interval = setInterval(
      () => setRemaintingTime((prevTime) => prevTime - 10),
      10
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <progress
      id="question-time"
      value={remainingTime}
      max={timer}
      className={mode}
    />
  );
}
