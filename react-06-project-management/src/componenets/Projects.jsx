import React from 'react';

function Projects({ projects, currentProjectId, setCurrentProjectId }) {
  return (
    <ul className="mt-5 list-none space-y-2">
      {projects.length > 0 &&
        projects.map((project, index) => (
          <li
            key={index}
            className={`cursor-pointer rounded px-2 py-4 text-gray-300 ${currentProjectId === index && 'bg-stone-800'}`}
            onClick={() => setCurrentProjectId(index)}
          >
            {project.name}
          </li>
        ))}
    </ul>
  );
}

export default Projects;
