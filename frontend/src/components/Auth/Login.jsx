import React, { useContext, useState } from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLock2Fill } from "react-icons/ri";
import { Link, Navigate, useLocation } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import axios from "axios";
import toast from "react-hot-toast";
import { Context } from "../../main";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const { isAuthorized, setIsAuthorized } = useContext(Context);
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = async (e) => {
    e.preventDefault();
    const API_BASE_URL = import.meta.env.VITE_API_URL || "https://careerconnectfullstack-production.up.railway.app";
    try {
      const { data } = await axios.post(
        `${API_BASE_URL}/api/v1/user/login`,
        { email, password, role },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      toast.success(data.message);
      localStorage.setItem("token", data.token || "true");
      setEmail("");
      setPassword("");
      setRole("");
      setIsAuthorized(true);
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong. Please check your network or CORS settings.");
    }
  };

  if(isAuthorized){
    return <Navigate to={from} replace />
  }

  return (
    <>
      <section className="authPage bg-zinc-900">
        <div className="container bg-zinc-900">
          <div className="header text-white">
            {/* <img src="/careerconnect-black.png" alt="logo" /> */}
            <h3>Login to your account</h3>
          </div>
          <form>
            <div className="inputTag text-white">
              <label>Login As</label>
              <div>
                <select value={role} onChange={(e) => setRole(e.target.value)}>
                  <option value="">Select Role</option>
                  
                  <option value="Job Seeker">Job Seeker</option>
                  <option value="Employer">Recruiter</option>
                </select>
                <FaRegUser />
              </div>
            </div>
            <div className="inputTag text-white">
              <label>Email Address</label>
              <div>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <MdOutlineMailOutline />
              </div>
            </div>
            <div className="inputTag text-white">
              <label>Password</label>
              <div>
                <input
                  type="password"
                  placeholder="Enter your Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <RiLock2Fill />
              </div>
            </div>
            <button type="submit" onClick={handleLogin}>
              Login
            </button>
            <Link to={"/register"}>Register Now</Link>
          </form>
        </div>
        <div className="banner">
          <img src="/login.png" alt="login" />
        </div>
      </section>
    </>
  );
};

export default Login;
