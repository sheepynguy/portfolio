"use client";
import Image from "next/image";
import useSound from "use-sound";

export default function Home() {
  const [easteregg, { sound }] = useSound('/soundeffects/objection.wav', {volume: 0.25});

  const handleEasterEggButton = () => {
    easteregg();
  }

  return (
    <div className="min-h-screen">
      {/* main body container */}
      <div className="grid justify-center gap-4">
        {/* top and bottom container */}
        {/* this lets the rows size to their content */}
        <div className="grid grid-cols-2 gap-4">
          {/* top container */}
          <div className="bg-green-700">
            {/* left container */}
            {/* This will later contain the bunny animation */}
          </div>

          <div className="flex justify-center bg-green-300"> 
            {/* right container */}
            <div className="flex flex-col">
            {/* entire text container */}
              <div className="flex-col">
                <p>
                  My name is Victoria Nguyen.
                </p>
                <p>
                  {/* maybe I can add some special styling for this */}
                  I'm a fullstack developer.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-2 max-w-[1000px] mx-auto px-4">
          {/* bottom container */}
          <div className="flex">
            {/* container */}
            I'm a fullstack engineer focused on building simple but effective web tools.
            I enjoy working on designing and creating a user experience that is built on clean and scalable code.
          </div>

          <div className="">
            {/* container */}
            <p>
              I'm currently a full stack developer at{" "}
            <a className="transition duration-500 ease-in-out hover:text-green-500 underline" href="https://www.dssedu.com/" target="_blank">
              Dynamic Support Solutions
            </a>
              , where I work on their financial tool that brings school financials into a much easier viewing experience for all user groups.
              In this role, I work on extradordinary items while parterning with other developers to identify bugs and implement fixes to the main pages.
            </p>
          </div>
                    
          <div className="flex flex-row">
            {/* container */}
            {/* may or may not need this container */}
            <p>
              Aside from my work, I've also done personal projects such as a{" "}
            <a target="_blank">
              text-based game
            </a>
            , a{" "}
            <a target="_blank">
              task tracker tool
            </a>
            , and I'm currently working on a{" "}
            <a target="_blank">
              2D-pixel adventure game
            </a>
              . These experiences have shaped how I approach building products that are clean and usable. 
            </p>
          </div>
                    
          <div className="text-black">
            {/* container */}
            <p>
              In my spare time, you can either catch me watching anime, hanging out with friends, or having a{" "}

            <button 
              className="hover:text-blue-400 transition duration-500"
              onClick={handleEasterEggButton}
            >
              turnabout in the classroom
            </button>
              .
            </p>
          </div>
           

          <div className="grid grid-cols-2">
             {/* button navigation container */}
             <div className="col-span-1 relative">
                <button 
                className="p-2 w-40 bg-green-300 transition duration-500 hover:bg-green-500 absolute right-2 rounded-xl"
                >
                  <a href="/about-me">More about me</a>
                </button>
             </div>

              <div className="col-span-1 relative">
                <button 
                className="p-2 w-40 bg-green-300 transition duration-500 hover:bg-green-500 absolute left-2 rounded-xl"
                >
                  Projects directory
                </button>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
