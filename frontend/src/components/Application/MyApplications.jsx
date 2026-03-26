import React, { useEffect, useState, useContext } from "react";
import { Context } from "../../main";
import toast from "react-hot-toast";
import ResumeModal from "./ResumeModal";

const MyApplications = () => {
  const { user } = useContext(Context);
  const [applications, setApplications] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [resumeImageUrl, setResumeImageUrl] = useState("");

  useEffect(() => {
    // Load applications from localStorage
    const storedApplications = JSON.parse(localStorage.getItem("applications")) || [];
    setApplications(storedApplications);
  }, []);

  // Delete application
  const deleteApplication = (index) => {
    const updatedApplications = applications.filter((_, i) => i !== index);
    localStorage.setItem("applications", JSON.stringify(updatedApplications));
    setApplications(updatedApplications);
    toast.success("Application deleted successfully!");
  };

  // Open modal to show resume
  const openModal = (imageUrl) => {
    setResumeImageUrl(imageUrl);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <section className="my_applications page">
      {user && user.role === "Job Seeker" ? (
        <div className="container">
          <center>
            <h1>My Applications</h1>
          </center>
          {applications.length <= 0 ? (
            <center>
              <h4>No Applications Found</h4>
            </center>
          ) : (
            applications.map((element, index) => (
              <JobSeekerCard
                element={element}
                key={index}
                deleteApplication={() => deleteApplication(index)}
                openModal={openModal}
              />
            ))
          )}
        </div>
      ) : (
        <center>
          <h4>Not Authorized</h4>
        </center>
      )}
      {modalOpen && <ResumeModal imageUrl={resumeImageUrl} onClose={closeModal} />}
    </section>
  );
};

export default MyApplications;

const JobSeekerCard = ({ element, deleteApplication, openModal }) => {
  return (
    <div className="job_seeker_card">
      <div className="detail">
        <p>
          <span>Name:</span> {element.name}
        </p>
        <p>
          <span>Email:</span> {element.email}
        </p>
        <p>
          <span>Phone:</span> {element.phone}
        </p>
        <p>
          <span>Address:</span> {element.address}
        </p>
        <p>
          <span>Cover Letter:</span> {element.coverLetter}
        </p>
      </div>
      <div className="resume">
        <img
          src={element.resume}
          alt="resume"
          onClick={() => openModal(element.resume)}
        />
      </div>
      <div className="btn_area">
        <button onClick={deleteApplication}>Delete Application</button>
      </div>
    </div>
  );
};
