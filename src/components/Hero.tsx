import { ArrowDown } from "lucide-react";
import {Link} from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative min-h-[calc(100vh-5rem)] md:min-h-screen bg-[#281885] flex flex-col justify-center items-center text-white">
      <h1 className="text-[#C52323] text-4xl md:text-7xl font-black leading-12 mb-5 md:mb-10 mt-0 text-center">
        <span className="opacity-0 animate-fade-in">Evelyn's</span>
        <span className="opacity-0 animate-fade-in-delay-1"> Portfolio</span>
      </h1>
      <p className="text-2xl md:text-3xl font-light opacity-0 animate-fade-in-delay-2">
        Scroll down to see more!
      </p>

      <div className="flex flex-col md:flex-row gap-4 justify-center mt-6 opacity-0 animate-fade-in-delay-3">
        <Link
          style={{ borderColor: "rgba(255,255,255,0.9)" }}
          className="border
  rounded-[0.3125rem]
  text-white
  text-[0.9375rem]
  font-bold
  h-10
  leading-10
  px-7.5
  uppercase
  button-hover"
          to="/about"
        >
          ABOUT ME
        </Link>
        <Link
          style={{ borderColor: "rgba(255,255,255,0.9)" }}
          className="border
  rounded-[0.3125rem]
  text-white
  text-[0.9375rem]
  font-bold
  h-10
  leading-10
  px-7.5
  uppercase
  button-hover"
          to="/work"
        >
          MY WORK
        </Link>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce ">
        <span className="text-sm mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-[#C52323]"></ArrowDown>
      </div>
    </div>
  );
};

export default Hero;
