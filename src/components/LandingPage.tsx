import "./landingpage.css";
import ParticleImage, {
  ParticleOptions,
  forces,
  ParticleForce,
} from "react-particle-image";
import logoImage from "../assets/logo4.png";
import { useEffect, useState } from "react";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import logo4 from "../assets/logo4.png";
import LogoAll from "../assets/logoAll.png";
import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { IoVolumeMuteSharp } from "react-icons/io5";
import { VscUnmute } from "react-icons/vsc";
import AudioFile from "../assets/waveSound.mp3";

const LandingPage = () => {
  const [hoveredDiv, setHoveredDiv] = useState(null);
  const [isMuted, setIsMuted] = useState(false);

  const [audio] = useState(new Audio(AudioFile));

  useEffect(() => {
    audio.play();
  }, [audio]);

  const toggleMute = () => {
    if (audio) {
      audio.muted = !audio.muted;
      setIsMuted(audio.muted);
    }
  };

  const getTextContent = () => {
    switch (hoveredDiv) {
      case 1:
        return "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";
      case 2:
        return "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";
      case 3:
        return "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";
      case 4:
        return "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";
      case 5:
        return "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";
      case 6:
        return "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";
      case 7:
        return "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";
    }
  };

  const createLink = () => {
    switch (hoveredDiv) {
      case 1:
        return (
          <Link to="/moloobhoy">
            Learn more about A.S Moloobhoy & Sons Pvt Ltd
          </Link>
        );
      case 2:
        return <Link to="/about">About Us</Link>;
      case 3:
        return <Link to="/emme">EMME</Link>;
      case 4:
        return (
          <Link to="/moloobhoy">
            Learn more about A.S Moloobhoy & Sons Pvt Ltd
          </Link>
        );
      case 5:
        return (
          <Link to="/molobhoy">
            Learn more about Molobhoy Marine Services LLC
          </Link>
        );
      case 6:
        return (
          <Link to="/molobhoy">
            Learn more about Molobhoy Marine Services LLC
          </Link>
        );
      case 7:
        return (
          <Link to="/molobhoy">
            Learn more about Molobhoy Marine Services LLC
          </Link>
        );
      default:
        return "";
    }
  };

  const particleOptions: ParticleOptions = {
    filter: ({ x, y, image }) => {
      // Get pixel
      const pixel = image.get(x, y);
      // Make a particle for this pixel if blue > 50 (range 0-255)
      return pixel.b > 50;
    },
    color: ({ x, y, image }) => "#ffffff",
  };

  const motionForce = (x: number, y: number): ParticleForce => {
    return forces.disturbance(x, y, 5);
  };

  const resetHoveredDiv = () => {
    setTimeout(() => {
      setHoveredDiv(null);
    }, 5000); // Change the delay (in milliseconds) as needed, e.g., 4000 for 4 seconds
  };

  // useEffect to call resetHoveredDiv when hoveredDiv changes
  useEffect(() => {
    if (hoveredDiv) {
      resetHoveredDiv();
    }
  }, [hoveredDiv]);

  return (
    <div className="w-full h-[100vh] flex justify-center items-center relative">
      <div className="left-[3%] top-[3%] absolute h-[60%]">
        <div className="">
          <img src={LogoAll} alt="" />
        </div>
        <div className="top-[90%] relative">
          {isMuted ? (
            <p onClick={toggleMute}>
              <IoVolumeMuteSharp size={35} color="blue" />
            </p>
          ) : (
            <p onClick={toggleMute}>
              <VscUnmute size={35} color="blue" />
            </p>
          )}
        </div>
      </div>
      <div className="w-[50%] lg:h-[75%] relative flex ">
        <ParticleImage
          src={logoImage}
          scale={0.3}
          entropy={15}
          maxParticles={4000}
          particleOptions={particleOptions}
          mouseMoveForce={motionForce}
          touchMoveForce={motionForce}
          className=" particle-image w-[75%] h-[95%] my-auto mx-auto flex justify-center items-center object-contain relative"
          // backgroundColor="#ffffff"
        />

        {hoveredDiv && (
          <div className="absolute top-[1%] left-0 w-full h-full flex justify-center items-center">
            <div className="w-[70%] h-[95%] my-auto mx-auto bg-black rounded-full">
              <div className="w-[100%] h-[90%] flex flex-col justify-between items-center]">
                <p className="text-white  z-40 w-[90%] mx-auto h-[90%] flex justify-center items-center text-center">
                  {getTextContent()}
                </p>
                <div className="w-full h-[10%] flex justify-center items-center">

                
                <button className=" w-[40%] h-[100%]  z-40 text-white">
                  <div className="left"></div>
                  Hover me!
                  <div className="right"></div>
                </button>
                
                
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="absolute w-[90%] mx-auto h-[90%] m-auto ">
          <div className="sm:hidden mobile:hidden md:block w-[100%] h-[100%] mx-auto ">
            <div className=" flex h-[14%] w-full -mt-[2%] justify-center items-center cursor-pointer">
              <h1
                onMouseEnter={() => setHoveredDiv(1)}
                className=" text-white text-xl relative -top-[7%] pt-2 h-[14%]  px-4 py-9 z-50 bg-[#6b6a6a] rounded-2xl font-optima font-normal ml-1.5"
              >
                A.S Moloobhoy Pvt Ltd
              </h1>
              <p className="target"></p>
            </div>

            <div className=" w-[102%]  h-[14%]  mx-auto text-white flex  cursor-pointer">
              {/* <Link to={"/about"}> */}
              <h1
                onMouseEnter={() => setHoveredDiv(2)}
                className=" text-xl relative top-[100%] -left-[12%]  rounded-2xl h-[14%]  pt-2 px-4 py-9  bg-[#6b6a6a]  font-optima font-normal"
              >
                A.S Moloobhoy FZCO
              </h1>
              {/* </Link> */}
            </div>

            <div className="w-[140%] mt-[6%] h-[14%] flex justify-end text-white  cursor-pointer">
              <h1
                onMouseEnter={() => setHoveredDiv(3)}
                className="ml-1.5 font-optima  relative   pt-2 px-4 py-9 h-[14%] bg-[#6b6a6a]  rounded-2xl text-xl font-normal"
              >
                A.S Moloobhoy & Sons Pvt Ltd
              </h1>
            </div>
            <div className="w-[100%] relative -left-[32%] -mr-[10%] h-[14%] text-white flex justify-start items-start cursor-pointer">
              <h1
                onMouseEnter={() => setHoveredDiv(4)}
                className="  pt-2 px-4 py-9 h-[14%]  bg-[#6b6a6a] z-30 rounded-2xl font-optima text-xl font-normal text-white"
              >
                Molobhoy Marine Services LLC
              </h1>
              <li></li>
            </div>

            <div className="h-[14%] relative w-[110%] left-[42%]   flex justify-end items-end  text-white  cursor-pointer">
              <h1
                onMouseEnter={() => setHoveredDiv(5)}
                className=" pt-2 h-11 px-4 bg-[#6b6a6a]  rounded-2xl font-optima  text-xl  relative font-normal text-white"
              >
                Moloobhoy Marine Services WLL:Qatar
              </h1>
            </div>

            <div className="relative flex w-[100%] top-[7%]  h-[14%] right-[30%] cursor-pointer">
              <h1
                onMouseEnter={() => setHoveredDiv(6)}
                className=" text-white text-xl pt-2 h-11 px-4 z-50 bg-[#6b6a6a] rounded-2xl font-optima font-normal ml-1.5"
              >
                Moloobhoy Marine Equipment LLP
              </h1>
              <p className="target"></p>
            </div>

            <div className=" flex w-[100%] relative top-[17%] left-[20%] h-[14%] justify-center items-center cursor-pointer">
              <h1
                onMouseEnter={() => setHoveredDiv(7)}
                className=" text-white text-xl pt-2 h-11 px-4 z-50 bg-[#6b6a6a] rounded-2xl font-optima font-normal ml-1.5"
              >
                Moloobhoy Marine Services LLC-Oman
              </h1>
              <p className="target"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
