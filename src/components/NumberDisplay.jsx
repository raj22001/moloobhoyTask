import React, { useEffect, useState } from "react";
import background from "../assets/backgroundimage2.jpg";
import TextSmokeAnimation from "./TextSmokeAnimation";
import LandingPage from "./LandingPage";
// import backgroundVideo from "../assets/""
import LogoAll from "../assets/logoAll.png";
import videoBackground from "../assets/bgWaveVideo.mp4";
import "./numberdisplay.css"

const NumberDisplay = () => {
  const [year, setYear] = useState(1905);
  const [showCountdown, setShowCountdown] = useState(true);
  const [startAnimationPart, setAnimationPart] = useState(false);
  const [nextPage, setNextPage] = useState(false);

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
      }, 1000); // Delay for 0.7 seconds after countdown finishes

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

  const skipVideHandler = () => {
    if (!nextPage) {
      setNextPage(true);
    }
  };

  return (
    <>
      {!nextPage ? (
        <>
          <video
            id="background-video"
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
          >
            <source src={videoBackground} type="video/mp4" />
          </video>

          <div
            className="relative w-full h-screen z-10 overflow-hidden"
            onClick={() => skipVideHandler()}
          >
            <>
              {startAnimationPart &&
                (showCountdown ? (
                  <>
                    <div className="absolute left-[3%] top-[3%]">
                      <img src={LogoAll} alt="" />
                    </div>
                    <div className="absolute inset-0 flex justify-center items-center">
                      <svg
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        width="450px"
                        height="240px"
                        xmlSpace="preserve"
                        className="svg"
                      >
                        <defs>
                          <pattern
                            id="water"
                            width=".25"
                            height="1.1"
                            patternContentUnits="objectBoundingBox"
                          >
                            <path
                              fill="#000"
                              d="M0.25,1H0c0,0,0-0.659,0-0.916c0.083-0.303,0.158,0.334,0.25,0C0.25,0.327,0.25,1,0.25,1z"
                            />
                          </pattern>

                          <text
                            id="text"
                            transform="translate(2,116)"
                            fontFamily="'Cabin Condensed'"
                            fontSize="161.047"
                          >
                            {year}
                          </text>

                          <mask id="text-mask">
                            <use
                              x="0"
                              y="0"
                              xlinkHref="#text"
                              opacity="1"
                              fill="#ffffff"
                            />
                          </mask>

                          <g id="eff">
                            <use x="0" y="0" xlinkHref="#text" fill="#a2a3a5" />

                            <rect
                              className="water-fill"
                              mask="url(#text-mask)"
                              fill="url(#water)"
                              x="-300"
                              y="50"
                              width="1200"
                              height="120"
                              opacity="0.3"
                              style={{ animationDuration: "2s" }} // Style as an object
                            >
                              <animate
                                attributeType="xml"
                                attributeName="x"
                                from="-300"
                                to="0"
                                repeatCount="indefinite"
                                dur="2s"
                              />
                            </rect>

                            {/* Other rect elements with animate tags */}
                          </g>
                        </defs>

                        <use
                          xlinkHref="#eff"
                          opacity="0.9"
                          style={{ mixBlendMode: "color-burn" }} // Style as an object
                        />
                      </svg>  
                    </div>
                  </>
                ) : (
                  <TextSmokeAnimation setNextPage={setNextPage} />
                ))}
            </>
          </div>
        </>
      ) : (
        <LandingPage />
      )}
    </>
  );
};

export default NumberDisplay;
