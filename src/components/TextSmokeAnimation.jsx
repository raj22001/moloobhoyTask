import React, { useEffect, useRef, useState } from "react";
import smokeVideo from "../assets/smoke.mp4";

const TextSmokeAnimation = ({setNextPage}) => {
  const textAnimationRef = useRef(null);
  const [firstTextAnimation, setFirstTextAnimation] = useState(false);

  const handleVideoEnded = () => {
    // Video ended, setFirstTextAnimation to true
    console.log("Video ended");
    setFirstTextAnimation(true);
  };

  console.log("firstTextAnimation", firstTextAnimation);

  useEffect(() => {
    if (firstTextAnimation) {
      const timer = setTimeout(() => {
        setNextPage(true);
      }, 5500);

      // Cleanup function
      return () => clearTimeout(timer);
    }
  }, [firstTextAnimation, setNextPage]);

  return (
    <section>
      <video src={smokeVideo} autoPlay muted onEnded={handleVideoEnded}></video>
      <h6>
        <span>Moloobhoy</span>
        <span>Group</span>
        <span>of</span>
        <span>Companies</span>
        {firstTextAnimation && (
          <h2 className="text-2xl text-blue-500">
            <span className="px-0.5 font-bold font-disket">119 </span>
            <span className="px-1 font-bold font-disket">Years</span>
            <span className="px-1 font-bold font-disket">Of </span>
            <span className="px-1 font-bold font-disket">Legacy</span>
          </h2>
        )}
      </h6>
      {/* Add another animation here */}
    </section>
  );
};

export default TextSmokeAnimation;
