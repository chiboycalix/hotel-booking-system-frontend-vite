import React from "react";
import { useNavigate } from "react-router-dom";
import { initTE, Carousel } from "tw-elements";
import landing from "../../assets/images/landing/carousel-one.jpeg";
import "./landing.css";
import icon from "../../assets/images/Icon.png";
import { Button } from "../../components";
import { ROUTES } from "../../routes";

const LandingPage = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    initTE({ Carousel });
  }, []);

  const handleClick = () => {
    navigate(ROUTES.LOGIN)
  }
  return (
    <div
      id="carouselDarkVariant"
      className="relative"
      data-te-carousel-init
      data-te-carousel-slide
    >
      <div
        className="absolute inset-x-0 bottom-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
        data-te-carousel-indicators
      >
        <button
          data-te-target="#carouselDarkVariant"
          data-te-slide-to="0"
          data-te-carousel-active
          className="slide-icon-one mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          data-te-target="#carouselDarkVariant"
          className="slide-icon-one mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-black bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
          data-te-slide-to="1"
          aria-label="Slide 1"
        ></button>
        <button
          data-te-target="#carouselDarkVariant"
          className="slide-icon-one mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-black bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
          data-te-slide-to="2"
          aria-label="Slide 1"
        ></button>
      </div>

      <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
        <div
          className="relative float-left -mr-[100%] w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
          data-te-carousel-fade
          data-te-carousel-item
          data-te-carousel-active
        >
          <img
            src={landing}
            className="block w-full h-screen"
            alt="Lamding page"
          />
          <div className="overlay text-white absolute top-0 left-0 w-full h-full opacity-50 flex flex-col items-center justify-center"></div>
          <div className="w-screen h-screen absolute top-0 left-0 flex flex-col items-center justify-center text-white">
            <div className="flex items-center gap-4">
              <div>
                <img src={icon} alt="icon" className="h-16 w-10"/>
              </div>
              <div>
                <h1 className="text-5xl">Stackstay</h1>
                <p className="text-sm text-center">Online Hotel Booking App.</p>
              </div>
            </div>
          </div>
        </div>

        <div
          className="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
          data-te-carousel-fade
          data-te-carousel-item
        >
          <img
            src={landing}
            className="block w-full h-screen"
            alt="Mountaintop"
          />
          <div className="overlay text-white absolute top-0 left-0 w-full h-full opacity-50 flex flex-col items-center justify-center"></div>
          <div className="w-screen h-screen absolute top-0 left-0 flex flex-col items-center justify-center text-white">
          <div className="flex items-center gap-4">
              <div>
                <img src={icon} alt="icon" className="h-16 w-10"/>
              </div>
              <div>
                <h1 className="text-5xl">Stackstay</h1>
                <p className="text-sm text-center">Online Hotel Booking App.</p>
              </div>
            </div>
          </div>
        </div>

        <div
          className="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
          data-te-carousel-fade
          data-te-carousel-item
        >
          <img
            src={landing}
            className="block w-full h-screen"
            alt="Woman Reading a Book"
          />
          <div className="overlay text-white absolute top-0 left-0 w-full h-full opacity-50 flex flex-col items-center justify-center"></div>
          <div className="w-screen h-screen absolute top-0 left-0 flex flex-col items-center justify-center text-white">
          <div className="flex items-center gap-4">
              <div>
                <img src={icon} alt="icon" className="h-16 w-10"/>
              </div>
              <div>
                <h1 className="text-5xl">Stackstay</h1>
                <p className="text-sm text-center">Online Hotel Booking App.</p>
              </div>
            </div>
            <div className="w-72 mt-4">
             <Button onClick={handleClick} variant="primary">Get Started</Button>
            </div>
          </div>
        </div>
      </div>

      <button
        className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
        type="button"
        data-te-target="#carouselDarkVariant"
        data-te-slide="prev"
      >
        <span className="inline-block h-8 w-8 dark:grayscale">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </span>
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Previous
        </span>
      </button>
      <button
        className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
        type="button"
        data-te-target="#carouselDarkVariant"
        data-te-slide="next"
      >
        <span className="inline-block h-8 w-8 dark:grayscale">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </span>
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Next
        </span>
      </button>
    </div>
  );
};

export default LandingPage;
