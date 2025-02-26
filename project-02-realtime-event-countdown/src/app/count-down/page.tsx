"use client";
import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownProps {
  targetDate: string;
}

function calcTimeLeft(targetDate: string): TimeLeft {
  const difference = new Date(targetDate).getTime() - new Date().getTime();
  console.log("calcTimeLeft()");

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

export default function Countdown({ targetDate }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() =>
    calcTimeLeft(targetDate)
  );

  useEffect(() => {
    const timer = setInterval(
      () => setTimeLeft(calcTimeLeft(targetDate)),
      1000
    );
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <h1>
      {timeLeft.days} : {timeLeft.hours} : {timeLeft.minutes} :{" "}
      {timeLeft.seconds}
    </h1>
  );
}
