import React from "react";
import { useContext } from "react";
import { Context } from "../../main";
import { Navigate } from "react-router-dom";
import HeroSection from "./HeroSection";
import HowItWorks from "./HowItWorks";
import PopularCategories from "./PopularCategories";
import PopularCompanies from "./PopularCompanies";
import Events from "./Events";
import About from "./About";
import Contact from "./Contact";
import MyChatBot from "./Chatbot";

const Home = () => {
  const { isAuthorized } = useContext(Context);
  
  return (
    <>
      <section className="homePage page bg-zinc-900">
        <MyChatBot/>
        <HeroSection />
        <HowItWorks/>
        <About/>
        <PopularCategories />
        <PopularCompanies />
        <Contact/>
        {/* <Events/> */}
      </section>
    </>
  );
};

export default Home;
