"use client";
// use this file to have a foating topbar button that expands to a modal when hovered
// will show user other pages to navigate to

import { FC, useState } from "react";

const NavigationButtons:FC = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    return(
        <div className="relative"
        >
            {/* the entire container, including modal */}
            <button
                className="bg-gray-100 rounded-xl w-8 h-8 hover:bg-gray-400 justify-center align-center"
                onMouseEnter={() => setModalOpen(true)}
                
            >
                |||
            </button>
            <div 
            className={`bg-blue-100 w-[200px] h-[200px] rounded-xl absolute -translate-y-1/2 right-full mr-2 z-50 transition-opacity duration-500 ease-in-out ${isModalOpen ? 'opacity-100' : 'opacity-0'}`}
            onMouseLeave={() => setModalOpen(false)}
            >
                {/* modal container */}
                <div>
                {/* button mapping here */}
                </div>
            </div>

        </div>
    );
}

export default NavigationButtons;