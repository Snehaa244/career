import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../../main';

const Features = () => {
  const navigate = useNavigate();
  const { isAuthorized } = useContext(Context);

  const features = [
    {
      imgSrc: 'https://cdn-icons-png.flaticon.com/128/6186/6186195.png',
      title: 'Resume Builder',
      description: 'Create stunning resumes effortlessly.',
      altText: 'Resume Builder',
      routePath: 'https://resumebuilder-sooty.vercel.app/details',
      isExternal: true,
    },
    {
      imgSrc: 'https://cdn-icons-png.flaticon.com/128/14927/14927436.png',
      title: 'Career Connect Portal',
      description: 'Network for job opportunities.',
      altText: 'Career Connect Portal',
      routePath: '/events',
      isExternal: false,
    },
    {
      imgSrc: 'https://cdn-icons-png.flaticon.com/128/6821/6821002.png',
      title: 'Personalized Dashboards',
      description: 'Tailored insights at your fingertips.',
      altText: 'Personalized Dashboards',
      routePath: '/Profile',
      isExternal: false,
    },
  ];

  return (
    <div className="bg-zinc-900">
      <h1 className="font-bold text-center text-4xl md:text-6xl text-white mt-5">Features We Provide</h1>
      <div className="flex flex-wrap justify-center lg:justify-between gap-6 space-x-0 md:space-x-4 ml-4 md:ml-16 lg:ml-32 mr-4 md:mr-16 lg:mr-32 px-6 mt-12 lg:mt-28">
        {features.map((feature, index) => (
          <div
            key={index}
            className="group before:hover:scale-95 before:hover:h-72 before:hover:w-80 before:rounded-b-2xl before:transition-all before:duration-500 before:content-[''] before:w-80 before:h-24 before:rounded-t-2xl before:bg-gradient-to-bl from-sky-200 via-orange-200 to-orange-700 before:absolute before:top-0 w-full sm:w-80 h-72 relative bg-slate-50 flex flex-col items-center justify-center gap-2 text-center rounded-2xl overflow-hidden"
          >
            <div className="w-28 h-28 bg-blue-400 mt-8 rounded-full border-4 border-blue-300 z-10 group-hover:scale-150 group-hover:-translate-x-24 group-hover:-translate-y-20 transition-all duration-500">
              <img className="justify-center ml-6 mt-6" src={feature.imgSrc} width="50px" height="50px" alt={feature.altText} />
            </div>
            <div className="z-10 group-hover:-translate-y-10 transition-all duration-500">
              <span className="text-2xl font-semibold">{feature.title}</span>
              <p>{feature.description}</p>
            </div>
            <button
              aria-label="Get Started"
              onClick={() => {
                if (!isAuthorized) {
                  navigate("/login");
                  return;
                }
                if (feature.isExternal) {
                  window.location.href = feature.routePath; 
                } else {
                  navigate(feature.routePath); 
                }
              }}
              className="px-8 py-2 text-white font-bold text-lg rounded-full shadow-lg transition-transform transform bg-green-800 border-2 border-pink hover:scale-105 hover:border-green-600 hover:shadow-green-500/50 hover:shadow-2xl focus:outline-none"
            >
              Get Started
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;