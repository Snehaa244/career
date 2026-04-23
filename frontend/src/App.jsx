import React, { useContext, useEffect } from "react";
import "./App.css";
import { Context } from "./main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import { Toaster } from "react-hot-toast";
import axios from "axios";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import Home from "./components/Home/Home";
import Jobs from "./components/Job/Jobs";
import JobDetails from "./components/Job/JobDetails";
import Application from "./components/Application/Application";
import MyApplications from "./components/Application/MyApplications";
import PostJob from "./components/Job/PostJob";
import NotFound from "./components/NotFound/NotFound";
import MyJobs from "./components/Job/MyJobs";
import LinkedIn from "./components/LinkedIn";
import Events from "./components/Home/Events";
import JobSeekerDashboard from "./components/JobSeekerDashboard";
import RecruiterView from "./components/RecruiterView";
import ProtectedRoute from "./components/Auth/ProtectedRoute";
import Features from "./components/Home/HowItWorks";

// Profile component for conditional rendering
const Profile = () => {
  const { user } = useContext(Context);

  // Conditional rendering based on user role
  return user?.role === "recruiter" ? <RecruiterView /> : <JobSeekerDashboard />;
};

const App = () => {
  const { isAuthorized, setIsAuthorized, setUser } = useContext(Context);

  useEffect(() => {
    const fetchUser = async () => {
      let API_BASE_URL = import.meta.env.VITE_API_URL || "https://career-rhae.onrender.com";
      if (API_BASE_URL && !API_BASE_URL.startsWith("http")) {
        API_BASE_URL = `https://${API_BASE_URL}`;
      }
      console.log("VITE_API_URL from env:", import.meta.env.VITE_API_URL);
      console.log("Using API_BASE_URL:", API_BASE_URL);
      try {
        const response = await axios.get(
          `${API_BASE_URL}/api/v1/user/getuser`,
          {
            withCredentials: true,
          }
        );
        setUser(response.data.user); // Set the logged-in user
        setIsAuthorized(true); // User is authorized
      } catch (error) {
        setIsAuthorized(false); // User is not authorized
      }
    };
    fetchUser();
  }, [isAuthorized, setIsAuthorized, setUser]);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route path="/job/getall" element={<Jobs />} />
          <Route path="/job/:id" element={<JobDetails />} />
          <Route path="/application/:id" element={<Application />} />
          <Route path="/applications/me" element={<MyApplications />} />
          <Route path="/job/post" element={<PostJob />} />
          <Route path="/job/me" element={<MyJobs />} />
          <Route path="/events" element={<Events />} />
          <Route path="/LinkedIn" element={<LinkedIn />} />
          <Route path="/Profile" element={<Profile />} /> {/* Role-based rendering */}
          <Route path="/features" element={<ProtectedRoute><Features /></ProtectedRoute>} />
          <Route path="*" element={<NotFound />} />
          <Route path="/jobseekerdashboard" element={<JobSeekerDashboard />} />
          <Route path="/RecruiterView" element={<RecruiterView />} />
        </Routes>
        <Footer />
        <Toaster />
      </BrowserRouter>
    </>
  );
};

export default App;
