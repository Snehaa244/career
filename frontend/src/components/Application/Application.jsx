import React, { useState, useContext } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { Context } from "../../main";

const Application = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [coverLetter, setCoverLetter] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [resume, setResume] = useState(null);

  const { isAuthorized, user } = useContext(Context);
  const navigateTo = useNavigate();
  const { id } = useParams();

  // Handle file input
  const handleFileChange = (event) => {
    const resume = event.target.files[0];
    setResume(resume);
  };

  // Function to handle application submission
  const handleApplication = (e) => {
    e.preventDefault();

    const newApplication = {
      name,
      email,
      phone,
      address,
      coverLetter,
      resume: URL.createObjectURL(resume), // Store the file locally
      jobId: id,
    };

    // Get existing applications from localStorage
    const storedApplications = JSON.parse(localStorage.getItem("applications")) || [];

    // Save the new application
    localStorage.setItem(
      "applications",
      JSON.stringify([...storedApplications, newApplication])
    );

    // Clear form fields
    setName("");
    setEmail("");
    setCoverLetter("");
    setPhone("");
    setAddress("");
    setResume(null);

    // Show success message
    toast.success("Application submitted successfully!");

    // Navigate to the job listing page
    navigateTo("/job/getall");
  };

  // Redirect if not authorized or user is Employer
  if (!isAuthorized || (user && user.role === "Employer")) {
    navigateTo("/");
  }

  return (
    <section className="application">
      <div className="container">
        <h3>Application Form</h3>
        <form onSubmit={handleApplication}>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="number"
            placeholder="Your Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            type="text"
            placeholder="Your Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <textarea
            placeholder="Cover Letter"
            value={coverLetter}
            onChange={(e) => setCoverLetter(e.target.value)}
          />
          <div>
            <label style={{ textAlign: "start", display: "block", fontSize: "20px" }}>
              Select Resume
            </label>
            <input
              type="file"
              accept=".pdf, .jpg, .png"
              onChange={handleFileChange}
              style={{ width: "100%" }}
            />
          </div>
          <button type="submit">Send Application</button>
        </form>
      </div>
    </section>
  );
};

export default Application;
