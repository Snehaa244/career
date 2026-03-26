import React, { useState } from 'react'; // Removed unused imports
import './styles.css';

function Hero() {
  // Define state for the query input
  const [query, setQuery] = useState('');

  // Define searchJobHandler function
  const searchJobHandler = () => {
    console.log(`Searching for: ${query}`);
    // Add your job search logic here
  };

  return (
    <>
      <div className='text-center'>
        <div className='flex flex-col gap-5 my-10'>
          <span className='mx-auto px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ... text-white font-medium'>
            Career Connect
          </span>
          <h1 className='text-6xl font-bold text-blue-500'>
          Your Next Career Move Starts Here <br /> {' '}
            <span className='text-[#78debc]'>Discover, Apply, Succeed!</span>
          </h1>
          <p className='text-gray-100  text-2xl font-medium'>
          Join thousands of professionals finding their dream jobs every day. Our platform connects you with the best opportunities, helping you grow and succeed in your career.
          </p>
          <div className='flex justify-center items-center gap-8'>
            {/* Example SVG Vectors or Image icons */}
            <img src='https://cdn-icons-png.freepik.com/256/3850/3850375.png?ga=GA1.1.2115079256.1724344357&semt=ais_hybrid' width={"60px"} height={"150px"}></img>
            <img src='https://cdn-icons-png.freepik.com/256/12587/12587006.png?ga=GA1.1.2115079256.1724344357&semt=ais_hybrid' width={"60px"} height={"150px"}></img>
            <img src='https://cdn-icons-png.freepik.com/256/9079/9079684.png?ga=GA1.1.2115079256.1724344357&semt=ais_hybrid' width={"60px"} height={"150px"}></img>
            <img src='https://cdn-icons-png.freepik.com/256/17352/17352942.png?ga=GA1.1.2115079256.1724344357&semt=ais_hybrid' width={"60px"} height={"150px"}></img>
            <img src='https://cdn-icons-png.freepik.com/256/6400/6400288.png?ga=GA1.1.2115079256.1724344357&semt=ais_hybrid' width={"60px"} height={"150px"}></img>
            <img src='https://cdn-icons-png.freepik.com/256/2936/2936736.png?ga=GA1.1.2115079256.1724344357&semt=ais_hybrid' width={"60px"} height={"150px"}></img>
            <img src='https://cdn-icons-png.freepik.com/256/1467/1467659.png?ga=GA1.1.2115079256.1724344357&semt=ais_hybrid' width={"60px"} height={"150px"}></img>
           
          </div>
          <div className='flex w-[60%]  text-white shadow-lg border pl-3 rounded-full items-center gap-4 mx-auto'>
            <input
              placeholder='Find your dream jobs'
              value={query} // Bind the input to state
              onChange={(e) => setQuery(e.target.value)} // Set the query state
              className='outline-none border-none w-full text-white bg-slate-700'
            />
            
            <button onClick={searchJobHandler} className="rounded-r-full bg-[#26efca] text-white px-4 py-2">
              <svg className='h-5 w-5' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6h.01M14 6h.01M10 10h.01M14 10h.01M10 14h.01M14 14h.01M10 18h.01M14 18h.01M10 6v12m4-12v12m6-8l-6 6m-6-6l6 6" />
              </svg>
            </button>
          </div>
          
        </div>
      </div>
      <div className="overflow-hidden whitespace-nowrap box-border bg-[#252525] shadow-burlywood">
    <div className="flex animate-marquee">
        <img src="Zoho.png" alt="Zoho" className="mr-20 h-24" />
        <img src="zerodha.png" alt="Zerodha" className="mr-20 h-24"/>
        <img src="urban-company.png" alt="Urban Company" className="mr-20 h-24" />
        <img src="unacademy.png" alt="Unacademy" className="mr-20 h-24" />
        <img src="swiggy.png" alt="Swiggy" className="mr-20 h-24" />
        <img src="paisa-bazaar.png" alt="Paisa Bazaar" className="mr-20 h-24" />
        <img src="nykaa-new.png" alt="Nykaa" className="mr-20 h-24" />
        <img src="niit.png" alt="NIIT" className="mr-20 h-24" />
        <img src="goibibo-new.png" alt="Goibibo" className="mr-20 h-24" />
        <img src="apollo-munich-new.png" alt="Apollo Munich" className="mr-20 h-24" />
    </div>
</div>

    </>
  );
}

export default Hero;
