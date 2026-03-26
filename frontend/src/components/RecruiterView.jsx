import React from 'react';

// Normally, this data would come from an API or props
// For this example, we'll use mock data
const jobSeekerProfile = {
  personalInfo: {
    fullName: "Jane Doe",
    email: "jane.doe@example.com",
    phone: "+1 (555) 123-4567",
    location: "New York, NY",
    summary: "Experienced software developer with a passion for creating efficient and scalable web applications. Skilled in React, Node.js, and Python."
  },
  workExperience: [
    {
      company: "Tech Innovations Inc.",
      position: "Senior Software Engineer",
      startDate: "2019-03-01",
      endDate: "Present",
      description: "Lead developer for the company's flagship product, improving performance by 40% and implementing new features that increased user engagement by 25%."
    },
    {
      company: "WebSolutions Co.",
      position: "Software Developer",
      startDate: "2016-06-01",
      endDate: "2019-02-28",
      description: "Developed and maintained multiple client websites, utilizing React and Node.js to create responsive and dynamic user interfaces."
    }
  ],
  education: [
    {
      institution: "University of Technology",
      degree: "Bachelor of Science",
      field: "Computer Science",
      graduationDate: "2016-05-15"
    }
  ],
  skills: ["JavaScript", "React", "Node.js", "Python", "SQL", "Git", "Agile Methodologies"],
  projects: [
    {
      title: "E-commerce Platform",
      description: "Developed a full-stack e-commerce platform with React frontend and Node.js backend, featuring real-time inventory management and secure payment processing.",
      technologies: "React, Node.js, Express, MongoDB, Stripe API",
      link: "https://github.com/janedoe/ecommerce-platform"
    },
    {
      title: "Task Management App",
      description: "Created a responsive task management application with drag-and-drop functionality, real-time updates, and team collaboration features.",
      technologies: "React, Firebase, Material-UI",
      link: "https://task-master-app.example.com"
    }
  ]
};

function RecruiterView() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-blue-600 text-white p-6">
        <h1 className="text-3xl font-bold">Candidate Profile</h1>
      </header>
      <main className="container mx-auto py-8 px-4">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Personal Information */}
          <section className="p-6 border-b">
            <h2 className="text-2xl font-semibold mb-4">Personal Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-lg font-medium">{jobSeekerProfile.personalInfo.fullName}</h3>
                <p className="text-gray-600">{jobSeekerProfile.personalInfo.email}</p>
                <p className="text-gray-600">{jobSeekerProfile.personalInfo.phone}</p>
                <p className="text-gray-600">{jobSeekerProfile.personalInfo.location}</p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Professional Summary</h3>
                <p className="text-gray-700">{jobSeekerProfile.personalInfo.summary}</p>
              </div>
            </div>
          </section>

          {/* Work Experience */}
          <section className="p-6 border-b">
            <h2 className="text-2xl font-semibold mb-4">Work Experience</h2>
            {jobSeekerProfile.workExperience.map((experience, index) => (
              <div key={index} className="mb-6 last:mb-0">
                <h3 className="text-lg font-medium">{experience.position}</h3>
                <p className="text-gray-600">{experience.company}</p>
                <p className="text-sm text-gray-500">
                  {experience.startDate} - {experience.endDate}
                </p>
                <p className="mt-2 text-gray-700">{experience.description}</p>
              </div>
            ))}
          </section>

          {/* Education */}
          <section className="p-6 border-b">
            <h2 className="text-2xl font-semibold mb-4">Education</h2>
            {jobSeekerProfile.education.map((edu, index) => (
              <div key={index} className="mb-4 last:mb-0">
                <h3 className="text-lg font-medium">{edu.degree} in {edu.field}</h3>
                <p className="text-gray-600">{edu.institution}</p>
                <p className="text-sm text-gray-500">Graduated: {edu.graduationDate}</p>
              </div>
            ))}
          </section>

          {/* Skills */}
          <section className="p-6 border-b">
            <h2 className="text-2xl font-semibold mb-4">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {jobSeekerProfile.skills.map((skill, index) => (
                <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </section>

          {/* Projects */}
          <section className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Projects</h2>
            {jobSeekerProfile.projects.map((project, index) => (
              <div key={index} className="mb-6 last:mb-0">
                <h3 className="text-lg font-medium">{project.title}</h3>
                <p className="text-gray-700 mt-2">{project.description}</p>
                <p className="text-sm text-gray-600 mt-1">Technologies: {project.technologies}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline mt-2 inline-block"
                >
                  View Project
                </a>
              </div>
            ))}
          </section>
        </div>
      </main>
    </div>
  );
}

export default RecruiterView;

