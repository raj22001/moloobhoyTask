
import "./landingpage.css"
import ParticleImage, { ParticleOptions , forces,
  ParticleForce } from "react-particle-image";
import logoImage from '../assets/logo4.png';
import { useState } from "react";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import logo4 from "../assets/logo4.png";

const LandingPage = () => {

  const [hoveredDiv, setHoveredDiv] = useState(null);

  const getTextContent = () => {
    switch (hoveredDiv) {
      case 1:
        return "Text for A.S Moloobhoy & Sons Pvt Ltd";
      case 2:
        return "Text for About";
      case 3:
        return "Text for EMME";
      case 4:
        return "Text for A.S Moloobhoy & Sons Pvt Ltd";
      case 5:
        return "Text for Molobhoy Marine Services LLC";
    }
  };

  const buttonData = [
    {
      name: "A.S Moloobhoy & Sons Pvt Ltd",
      text: "The Paragraphs module in Drupal provides editors with a component driven architecture for building pages. Morpht has been developing Paragraph approaches to site building since 2015. This case study captures some of the content from a Drupal 7 Paragraphs Demo site which was built to showcase what could be done with Paragraphs.",
      url: "https://www.asmoloobhoy.com/",
    },
    {
      name: "A.S Moloobhoy Pvt Ltd",
      text: "Hi, Im a Demo Text of &nbsp;<a href='example.com'> A.S Moloobhoy Pvt Ltd</a>",
    },
    {
      name: "Molobhoy Marine Services LLC",
      text: "Hi, Im a Demo Text of A.S Moloobhoy FZCO",
    },
    {
      name: "A.S Moloobhoy FZCO ",
      text: "Hi, Im a Demo Text of Molobhoy Marine Services LLC",
    },
    {
      name: "Moloobhoy Marine Equipment LLP",
      text: "Hi, Im a Demo Text of Moloobhoy Marine Equipment LLP",
    },
    {
      name: "Moloobhoy Marine Services WLL:Qatar",
      text: "Hi, Im a Demo Text of Moloobhoy Marine Services WLL:Qatar",
    },
    {
      name: "Moloobhoy Marine Services LLC-Oman",
      text: "Hi, Im a Demo Text of Moloobhoy Marine Services LLC-Oman",
    },
  ];

  const getLogoSource = () => {
    switch (hoveredDiv) {
      case 1:
        return logo4;
      case 2:
        return logo2;
      case 3:
        return logo3;
      case 4:
        return logo4;
      case 5:
        return logo4;
      default:
        return null;
    }
  };

  const particleOptions: ParticleOptions = {
    filter: ({ x, y, image }) => {
      // Get pixel
      const pixel = image.get(x, y);
      // Make a particle for this pixel if blue > 50 (range 0-255)
      return pixel.b > 50;
    },
    color: ({ x, y, image }) => "#61dafb"
  };

  const motionForce = (x: number, y: number): ParticleForce => {
    return forces.disturbance(x, y, 5);
  };


  return (
    <div className="w-full h-[100vh] flex justify-center items-center">
      <div className="w-[50%] lg:h-[75%] relative flex ">

      <ParticleImage
      src={logoImage}
      scale={0.3}
      entropy={15}
      maxParticles={4200}
      particleOptions={particleOptions}
      mouseMoveForce={motionForce}
      touchMoveForce={motionForce}
      className="w-[75%] h-[95%] my-auto mx-auto flex justify-center items-center object-contain relative"
      backgroundColor="#Ffffff"
      />

      {/* <div className="absolute lg:w-[75%] lg:h-[95%] my-auto xl:w-[90%] md:w-[100%] rounded-full bg-black z-40">

      </div> */}
      <div className="absolute w-[90%] mx-auto h-[90%] m-auto ">
          <div className="sm:hidden mobile:hidden md:block w-[100%] h-[100%] mx-auto ">
            <div className=" flex h-[14%] w-full -mt-[6%] justify-center items-center cursor-pointer">
              <h1
                onMouseEnter={() => setHoveredDiv(1)}
                onMouseLeave={() => setHoveredDiv(null)}
                className=" text-white text-xl pt-2 h-[14%]  px-4 py-9 z-50 bg-[#8025F3] rounded-2xl font-optima font-normal ml-1.5"
              >
                A.S Moloobhoy Pvt Ltd
              </h1>
              <p className="target"></p>
            </div>

            <div className="position-2 w-[89%]  h-[14%]  mx-auto text-white flex  cursor-pointer">
              {/* <Link to={"/about"}> */}
                <h1
                  onMouseEnter={() => setHoveredDiv(2)}
                  onMouseLeave={() => setHoveredDiv(null)}
                  className=" text-xl top-[60%]  rounded-2xl h-[14%]  pt-2 px-4 py-9  bg-[#8025F3]  font-optima font-normal"
                >
                  A.S Moloobhoy FZCO
                </h1>
              {/* </Link> */}
            </div>

            <div className="w-[113%]  h-[14%] flex justify-end text-white  cursor-pointer">
              <h1
                onMouseEnter={() => setHoveredDiv(3)}
                onMouseLeave={() => setHoveredDiv(null)}
                className="ml-1.5 font-optima  pt-2 px-4 py-9 h-[14%] bg-[#8025F3]  rounded-2xl text-xl font-normal"
              >
                A.S Moloobhoy & Sons Pvt Ltd
              </h1>
            </div>
            <div className="w-[100%] -mr-[10%] h-[14%] text-white flex justify-start items-start cursor-pointer">
              <h1
                onMouseEnter={() => setHoveredDiv(4)}
                onMouseLeave={() => setHoveredDiv(null)}
                className="  pt-2 px-4 py-9 h-[14%]  bg-[#8025F3] z-30 rounded-2xl font-optima text-xl font-normal text-white"
              >
                EMME
              </h1>
              <li></li>
            </div>

            <div className="h-[14%] w-[110%]  -mt-[7%]  flex justify-end items-end  text-white  cursor-pointer">
              <h1
                onMouseEnter={() => setHoveredDiv(5)}
                onMouseLeave={() => setHoveredDiv(null)}
                className=" pt-2 h-11 px-4 bg-[#8025F3]  rounded-2xl font-optima  text-xl  relative font-normal text-white"
              >
                Molobhoy Marine Services LLC
              </h1>
            </div>

            <div className=" flex w-[100%]  h-[14%] justify-center items-center cursor-pointer">
              <h1
                onMouseEnter={() => setHoveredDiv(6)}
                onMouseLeave={() => setHoveredDiv(null)}
                className=" text-white text-xl pt-2 h-11 px-4 z-50 bg-[#8025F3] rounded-2xl font-optima font-normal ml-1.5"
              >
                A.S Moloobhoy Pvt Ltd
              </h1>
              <p className="target"></p>
            </div>

            <div className=" flex w-[100%] h-[14%] justify-center items-center cursor-pointer">
              <h1
                onMouseEnter={() => setHoveredDiv(7)}
                onMouseLeave={() => setHoveredDiv(null)}
                className=" text-white text-xl pt-2 h-11 px-4 z-50 bg-[#8025F3] rounded-2xl font-optima font-normal ml-1.5"
              >
                A.S Moloobhoy Pvt Ltd
              </h1>
              <p className="target"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
