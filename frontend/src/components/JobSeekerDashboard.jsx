import React, { useState } from 'react';
import PersonalInfo from './Profile/components_PersonalInfo';
import WorkExperience from './Profile/components_WorkExperience';
import Education from './Profile/components_Education';
import Skills from './Profile/components_Skills';
import Projects from './Profile/components_Projects';

function JobSeekerDashboard() {
  const [activeTab, setActiveTab] = useState('personal');

  const renderActiveComponent = () => {
    switch (activeTab) {
      case 'personal':
        return <PersonalInfo/>;
      case 'experience':
        return <WorkExperience/>;
      case 'education':
        return <Education/>;
      case 'skills':
        return <Skills/>;
      case 'projects':
        return <Projects/>;
      default:
        return <PersonalInfo />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-400">
      <header className="bg-slate-600 text-white p-4">
        <h1 className="text-2xl font-bold">Job Seeker Dashboard</h1>
      </header>
      <main className="container mx-auto mt-8 p-4">
        <div className="bg-gray-300 rounded-lg shadow-md">
          <nav className="flex border-b bg-gray-500 text-white">
            <button
              className={`px-4 py-2 font-medium ${
                activeTab === 'personal' ? 'bg-blue-100 text-blue-600' : ''
              }`}
              onClick={() => setActiveTab('personal')}
            >
              Personal Info
            </button>
            <button
              className={`px-4 py-2 font-medium ${
                activeTab === 'experience' ? 'bg-blue-100 text-blue-600' : ''
              }`}
              onClick={() => setActiveTab('experience')}
            >
              Work Experience
            </button>
            <button
              className={`px-4 py-2 font-medium ${
                activeTab === 'education' ? 'bg-blue-100 text-blue-600' : ''
              }`}
              onClick={() => setActiveTab('education')}
            >
              Education
            </button>
            <button
              className={`px-4 py-2 font-medium ${
                activeTab === 'skills' ? 'bg-blue-100 text-blue-600' : ''
              }`}
              onClick={() => setActiveTab('skills')}
            >
              Skills
            </button>
            <button
              className={`px-4 py-2 font-medium ${
                activeTab === 'projects' ? 'bg-blue-100 text-blue-600' : ''
              }`}
              onClick={() => setActiveTab('projects')}
            >
              Projects
            </button>
          </nav>
          <div className="p-4">{renderActiveComponent()}</div>
        </div>
      </main>
    </div>
  );
}

export default JobSeekerDashboard;

