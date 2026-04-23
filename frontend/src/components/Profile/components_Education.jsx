import React, { useState } from 'react';

function Education() {
  const [educations, setEducations] = useState([]);
  const [currentEducation, setCurrentEducation] = useState({
    institution: '',
    degree: '',
    field: '',
    graduationDate: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentEducation((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEducations((prev) => [...prev, currentEducation]);
    setCurrentEducation({
      institution: '',
      degree: '',
      field: '',
      graduationDate: '',
    });
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Education</h2>
      <form onSubmit={handleSubmit} className="space-y-4 mb-8">
        <div>
          <label htmlFor="institution" className="block text-sm font-medium text-gray-700">
            Institution
          </label>
          <input
            type="text"
            id="institution"
            name="institution"
            value={currentEducation.institution}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
        </div>
        <div>
          <label htmlFor="degree" className="block text-sm font-medium text-gray-700">
            Degree
          </label>
          <input
            type="text"
            id="degree"
            name="degree"
            value={currentEducation.degree}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
        </div>
        <div>
          <label htmlFor="field" className="block text-sm font-medium text-gray-700">
            Field of Study
          </label>
          <input
            type="text"
            id="field"
            name="field"
            value={currentEducation.field}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
        </div>
        <div>
          <label htmlFor="graduationDate" className="block text-sm font-medium text-gray-700">
            Graduation Date
          </label>
          <input
            type="date"
            id="graduationDate"
            name="graduationDate"
            value={currentEducation.graduationDate}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Add Education
        </button>
      </form>

      <div className="space-y-4">
        {educations.map((edu, index) => (
          <div key={index} className="border p-4 rounded-md">
            <h3 className="font-semibold">{edu.institution}</h3>
            <p>{edu.degree} in {edu.field}</p>
            <p className="text-sm text-gray-600">Graduated: {edu.graduationDate}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;

