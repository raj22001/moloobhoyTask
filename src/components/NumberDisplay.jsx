import React, { useEffect, useState } from "react";
import background from "../assets/backgroundimage2.jpg";
import TextSmokeAnimation from "./TextSmokeAnimation";
import LandingPage from "./LandingPage";

const NumberDisplay = () => {
  const [year, setYear] = useState(1905);
  const [showCountdown, setShowCountdown] = useState(true);
  const [startAnimationPart, setAnimationPart] = useState(false);
  const [nextPage, setNextPage] = useState(true);

  useEffect(() => {
    const countdownTimeout = setTimeout(() => {
      setAnimationPart(true);
    }, 1000); // Delay for 1 second before showing the countdown

    return () => clearTimeout(countdownTimeout);
  }, []);

  useEffect(() => {
    if (year <= 2023 && showCountdown) {
      const timer = setTimeout(() => {
        const nextYear = year + 1;
        setYear(nextYear);
      }, calculateDelay(year));

      return () => clearTimeout(timer);
    }
  }, [year]);

  useEffect(() => {
    if (year > 2023) {
      const smokeTimeout = setTimeout(() => {
        setShowCountdown(false);
      }, 700); // Delay for 0.7 seconds after countdown finishes

      return () => clearTimeout(smokeTimeout);
    }
  }, [year]);

  function calculateDelay(year) {
    const accelerationStartYear = 1905;
    const decelerationEndYear = 2024;
    const accelerationFactor = 0.9;
    const decelerationFactor = 0.02;

    if (year === accelerationStartYear || year === decelerationEndYear) {
      return 1000;
    } else if (year < decelerationEndYear && year > accelerationStartYear) {
      const distanceFromAccelerationStart = year - accelerationStartYear;
      const distanceFromDecelerationEnd = decelerationEndYear - year;
      const accelerationDelay =
        1000 / (1 + accelerationFactor * distanceFromAccelerationStart);
      const decelerationDelay =
        1000 / (1 + decelerationFactor * distanceFromDecelerationEnd);
      return Math.min(accelerationDelay, decelerationDelay);
    } else {
      return 50;
    }
  }

  return (
    <>
    {
        !nextPage ? (
            <div
            className="relative w-full h-screen z-10"
            style={{
              backgroundImage: `url(${background})`,
              backgroundSize: "cover",
            }}
          >
            {startAnimationPart &&
              (showCountdown ? (
                <div className="absolute inset-0 flex justify-center items-center">
                  <h1 className="text-black text-6xl z-20">{year}</h1>
                </div>
              ) : (
                <TextSmokeAnimation setNextPage={setNextPage} />
              ))}
          </div>
        ) : (
            <LandingPage/>
        )
    }
     
    </>
  );
};

export default NumberDisplay;
