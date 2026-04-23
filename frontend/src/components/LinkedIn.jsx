import React, { useState } from "react";

const LinkedIn = () => {
  const [profile, setProfile] = useState({
    githubLink: "",
    resume: null,
    achievements: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setProfile((prevProfile) => ({
      ...prevProfile,
      resume: e.target.files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can send the `profile` data to your backend or handle it however you want.
    console.log(profile);
    alert("Profile submitted successfully!");
  };

  return (
    <div className="max-w-4xl mx-auto my-10 p-5 bg-gray-100 shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-5">User Profile</h1>
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* GitHub Link */}
        <div>
          <label htmlFor="githubLink" className="block font-semibold mb-2">GitHub Link:</label>
          <input
            type="url"
            id="githubLink"
            name="githubLink"
            value={profile.githubLink}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
            placeholder="Enter your GitHub link"
          />
        </div>

        {/* Resume Upload */}
        <div>
          <label htmlFor="resume" className="block font-semibold mb-2">Upload Resume:</label>
          <input
            type="file"
            id="resume"
            name="resume"
            onChange={handleFileChange}
            className="w-full p-2 border rounded-lg"
          />
        </div>

        {/* Achievements */}
        <div>
          <label htmlFor="achievements" className="block font-semibold mb-2">Post Your Achievements:</label>
          <textarea
            id="achievements"
            name="achievements"
            value={profile.achievements}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
            placeholder="Describe your achievements..."
            rows="5"
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600"
          >
            Submit Profile
          </button>
        </div>
      </form>
    </div>
  );
};

export default LinkedIn;
