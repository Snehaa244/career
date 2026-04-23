import React from 'react'

export default function About() {
  return (
    <>
    <section class="text-gray-600 body-font bg-[#181818]">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-wrap w-full mb-20">
        <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
          <h1 class="sm:text-3xl text-4xl font-bold title-font mb-2 text-blue-400">About CarrerConnect</h1>
          <div class="h-1 w-20 bg-indigo-500 rounded"></div>
        </div>
        <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">We envision a world where everyone has equal access to career opportunities and can achieve their fullest potential. We aim to foster a vibrant ecosystem where professionals can find jobs, upskill, and grow, and employers can discover the best talent.</p>
      </div>
      <div class="flex flex-wrap -m-4">
        <div class="xl:w-1/4 md:w-1/2 p-4">
          <div class="bg-gray-800 p-6 rounded-lg border-4 border-indigo-500/100 ...">
            <img class="h-40 rounded w-full object-cover object-center mb-6" src="image1.jpg" alt="content"/>
            <h3 class="tracking-widest text-white-500 text-xs font-medium title-font">AI-Powered Job Search</h3>
            <h2 class="text-lg text-gray-100 font-medium title-font mb-4">Fast Searching Of Jobs</h2>
            <p class="leading-relaxed text-base text-white">Our advanced AI helps job seekers find the most relevant positions based on their skills, experience, and preferences, ensuring a personalized and efficient job search experience.</p>
          </div>
        </div>
        <div class="xl:w-1/4 md:w-1/2 p-4">
          <div class="bg-gray-800 p-6 rounded-lg border-4 border-green-500/100 ... ">
            <img class="h-40 rounded w-full object-cover object-center mb-6" src="image2.jpg" alt="content"/>
            <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">Skill-Based Job Filtering</h3>
            <h2 class="text-lg text-white font-medium title-font mb-4">Job Filtering</h2>
            <p class="leading-relaxed text-base text-white">Job seekers can filter opportunities based on their skill sets, making it easier to find jobs tailored to their expertise.</p>
          </div>
        </div>
        <div class="xl:w-1/4 md:w-1/2 p-4">
          <div class="bg-gray-800 p-6 rounded-lg border-4 border-pink-500/100 ...">
            <img class="h-40 rounded w-full object-cover object-center mb-6" src="image3.jpg" alt="content"/>
            <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">Career Counseling & Mentorship</h3>
            <h2 class="text-lg text-white font-medium title-font mb-4">One to One guidance</h2>
            <p class="leading-relaxed text-base text-white">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
          </div>
        </div>
        <div class="xl:w-1/4 md:w-1/2 p-4">
          <div class="bg-gray-800 p-6 rounded-lg border-4 border-yellow-500/100 ...">
            <img class="h-40 rounded w-full object-cover object-center mb-6" src="image4.jpg" alt="content"/>
            <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">Personalized Dashboards</h3>
            <h2 class="text-lg text-white font-medium title-font mb-4">Easily Accesible</h2>
            <p class="leading-relaxed text-base text-white">Access all your applications, interviews, and career growth insights in one place. Our personalized dashboards help you stay organized and up to date with your career progress.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  </>
  )
}
