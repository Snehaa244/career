import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../../main";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const { isAuthorized } = useContext(Context);
  const navigateTo = useNavigate();
  useEffect(() => {
<<<<<<< HEAD
    const API_BASE_URL = import.meta.env.VITE_API_URL || "https://careerconnectfullstack-production.up.railway.app";
    try {
      axios
        .get(`${API_BASE_URL}/api/v1/job/getall`, {
=======
    try {
      axios
        .get("http://localhost:4000/api/v1/job/getall", {
>>>>>>> 5b07081137e5d7f9889eacf80303dbf9cd55e7b1
          withCredentials: true,
        })
        .then((res) => {
          setJobs(res.data);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);
  if (!isAuthorized) {
    navigateTo("/");
  }

  return (
    <section className="jobs page bg-zinc-900">
      <div className="container bg-zinc-900">
        <h1 className="text-white">ALL AVAILABLE JOBS</h1>
        <div className="banner">
          {jobs.jobs &&
            jobs.jobs.map((element) => {
              return (
                <div className="card" key={element._id}>
                  <p>{element.title}</p>
                  <p>{element.category}</p>
                  <p>{element.country}</p>
                  <Link to={`/job/${element._id}`}>Job Details</Link>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default Jobs;
