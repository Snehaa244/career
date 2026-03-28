import React, { useContext, useState } from "react";
import { Context } from "../../main";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai"; // Import the close icon

const Navbar = () => {
  const [show, setShow] = useState(false);
  const { isAuthorized, setIsAuthorized, user } = useContext(Context);
  const navigateTo = useNavigate();

  const handleLogout = async () => {
    const API_BASE_URL = import.meta.env.VITE_API_URL || "https://careerconnectfullstack-production.up.railway.app";
    try {
      const response = await axios.get(
        `${API_BASE_URL}/api/v1/user/logout`,
        {
          withCredentials: true,
        }
      );
      toast.success(response.data.message);
      localStorage.removeItem("token");
      setIsAuthorized(false);
      navigateTo("/login");
    } catch (error) {
      toast.error(error.response.data.message), setIsAuthorized(true);
    }
  };

  return (
    <nav className={"navbarShow"}>
      <div className="container">
        <div className="logo text-white">
          CarrerConnect
        </div>
        <ul className={!show ? "menu" : "show-menu menu"}>
          <li>
            <Link to={"/"} onClick={() => setShow(false)}>
              HOME
            </Link>
          </li>
          {isAuthorized ? (
            <>
              <li>
                <Link to={"/job/getall"} onClick={() => setShow(false)}>
                  ALL JOBS
                </Link>
              </li>
              <li>
                <Link to={"/applications/me"} onClick={() => setShow(false)}>
                  {user && user.role === "Employer"
                    ? "APPLICANT'S APPLICATIONS"
                    : "MY APPLICATIONS"}
                </Link>
              </li>
              {user && user.role === "Employer" ? (
                <>
                  <li>
                    <Link to={"/job/post"} onClick={() => setShow(false)}>
                      POST NEW JOB
                    </Link>
                  </li>
                  <li>
                    <Link to={"/job/me"} onClick={() => setShow(false)}>
                      VIEW YOUR JOBS
                    </Link>
                  </li>
                </>
              ) : null}
              <button onClick={handleLogout}>LOGOUT</button>
            </>
          ) : (
            <li>
              <Link to={"/login"} onClick={() => setShow(false)}>
                LOGIN
              </Link>
            </li>
          )}
        </ul>
        <div className="hamburger" onClick={() => setShow(!show)}>
          {show ? <AiOutlineClose /> : <GiHamburgerMenu />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

