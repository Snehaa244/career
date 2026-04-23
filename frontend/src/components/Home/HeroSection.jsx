import React, { useState } from "react";
import "./styles.css";

function Hero() {
  const [query, setQuery] = useState("");

  const searchJobHandler = () => {
    console.log(`Searching for: ${query}`);
  };

  const companies = [
    "Zoho.png",
    "zerodha.png",
    "urban-company.png",
    "unacademy.png",
    "swiggy.png",
    "paisa-bazaar.png",
    "nykaa-new.png",
    "niit.png",
    "goibibo-new.png",
    "apollo-munich-new.png",
  ];

  return (
    <>
      {/* HERO */}
      <section className="text-center px-4 py-10">
        <div className="flex flex-col gap-6 max-w-5xl mx-auto">

          {/* Badge */}
          <span className="mx-auto px-4 py-2 text-xs sm:text-sm md:text-base rounded-full bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 text-white font-medium">
            Career Connect
          </span>

          {/* Heading */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-blue-500 leading-snug">
            Your Next Career Move Starts Here <br />
            <span className="text-[#78debc]">
              Discover, Apply, Succeed!
            </span>
          </h1>

          {/* Description */}
          <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Join thousands of professionals finding their dream jobs every day.
            Our platform connects you with the best opportunities, helping you
            grow and succeed in your career.
          </p>

          {/* ICONS (FIXED) */}
          <div className="flex flex-wrap justify-center items-center gap-4">
            <img src="https://cdn-icons-png.freepik.com/256/3850/3850375.png" alt="icon" className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"/>
            <img src="https://cdn-icons-png.freepik.com/256/12587/12587006.png" alt="icon" className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"/>
            <img src="https://cdn-icons-png.freepik.com/256/9079/9079684.png" alt="icon" className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"/>
            <img src="https://cdn-icons-png.freepik.com/256/17352/17352942.png" alt="icon" className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"/>
            <img src="https://cdn-icons-png.freepik.com/256/6400/6400288.png" alt="icon" className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"/>
            <img src="https://cdn-icons-png.freepik.com/256/2936/2936736.png" alt="icon" className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"/>
            <img src="https://cdn-icons-png.freepik.com/256/1467/1467659.png" alt="icon" className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"/>
          </div>

          {/* SEARCH BAR */}
          <div className="flex w-full sm:w-[80%] md:w-[60%] mx-auto items-center bg-slate-700 rounded-full shadow-lg px-3 py-2">
            <input
              type="text"
              placeholder="Find your dream jobs..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1 bg-transparent outline-none text-white px-2 text-sm sm:text-base"
            />

            <button
              onClick={searchJobHandler}
              className="bg-[#26efca] hover:bg-[#1ddbb5] transition px-4 py-2 rounded-full"
            >
              🔍
            </button>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="overflow-hidden bg-[#252525] py-5">
        <div className="marquee flex flex-nowrap items-center gap-16">
  {companies.concat(companies).map((img, index) => (
    <img
      key={index}
      src={img}
      alt="company"
      className="h-20 sm:h-24 md:h-28 lg:h-32 w-auto flex-shrink-0"
    />
  ))}
</div>
      </section>
    </>
  );
}

export default Hero;
