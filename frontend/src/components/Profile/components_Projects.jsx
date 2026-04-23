import React, { useState } from 'react';

function Projects() {
  const [projects, setProjects] = useState([]);
  const [currentProject, setCurrentProject] = useState({
    title: '',
    description: '',
    technologies: '',
    link: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentProject((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setProjects((prev) => [...prev, currentProject]);
    setCurrentProject({
      title: '',
      description: '',
      technologies: '',
      link: '',
    });
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Projects</h2>
      <form onSubmit={handleSubmit} className="space-y-4 mb-8">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Project Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={currentProject.title}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
        </div>
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            rows="3"
            value={currentProject.description}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          ></textarea>
        </div>
        <div>
          <label htmlFor="technologies" className="block text-sm font-medium text-gray-700">
            Technologies Used
          </label>
          <input
            type="text"
            id="technologies"
            name="technologies"
            value={currentProject.technologies}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
        </div>
        <div>
          <label htmlFor="link" className="block text-sm font-medium text-gray-700">
            Project Link
          </label>
          <input
            type="url"
            id="link"
            name="link"
            value={currentProject.link}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Add Project
        </button>
      </form>

      <div className="space-y-4">
        {projects.map((project, index) => (
          <div key={index} className="border p-4 rounded-md">
            <h3 className="font-semibold">{project.title}</h3>
            <p className="mt-2">{project.description}</p>
            <p className="text-sm text-gray-600 mt-1">Technologies: {project.technologies}</p>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline mt-2 inline-block"
              >
                View Project
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;

