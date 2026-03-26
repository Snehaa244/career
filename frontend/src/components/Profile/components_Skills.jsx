import React, { useState } from 'react';

function Skills() {
  const [skills, setSkills] = useState([]);
  const [currentSkill, setCurrentSkill] = useState('');

  const handleChange = (e) => {
    setCurrentSkill(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentSkill.trim()) {
      setSkills((prev) => [...prev, currentSkill.trim()]);
      setCurrentSkill('');
    }
  };

  const removeSkill = (skillToRemove) => {
    setSkills((prev) => prev.filter((skill) => skill !== skillToRemove));
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Skills</h2>
      <form onSubmit={handleSubmit} className="space-y-4 mb-8">
        <div>
          <label htmlFor="skill" className="block text-sm font-medium text-gray-700">
            Add a Skill
          </label>
          <div className="flex mt-1">
            <input
              type="text"
              id="skill"
              name="skill"
              value={currentSkill}
              onChange={handleChange}
              className="flex-grow rounded-l-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Add
            </button>
          </div>
        </div>
      </form>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full flex items-center"
          >
            <span>{skill}</span>
            <button
              onClick={() => removeSkill(skill)}
              className="ml-2 text-blue-600 hover:text-blue-800 focus:outline-none"
            >
              &times;
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;

