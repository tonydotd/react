import React, { useState } from 'react';
import Sidebar from './componenets/Sidebar';
import Content from './componenets/Content';
import Header from './componenets/Header';

function App() {
  const [projects, setProjects] = useState([
    {
      name: 'learn react',
      description: 'lorem ip sum',
      due: '2025-01-02',
      tasks: ['study udemy', 'do pet project'],
    },
    {
      name: 'master react',
      description: 'lorem ip sum',
      due: '2025-02-03',
      tasks: ['create a landing page', 'create an application'],
    },
  ]);
  const [currentProjectId, setCurrentProjectId] = useState(-1);
  console.log(currentProjectId);

  function handleCreate(project) {
    setProjects((prevProjects) => [project, ...prevProjects]);
  }

  function handleClickCreate() {
    setCurrentProjectId(projects.length);
  }

  function handleCancel() {
    setCurrentProjectId(-1);
  }

  function handleAddTask(projectId, task) {
    const project = projects[projectId];
    project.tasks = [task, ...project.tasks];
    setProjects((prevProjects) => [...prevProjects, project]);
  }

  function handleRemoveTask(projectId, taskIndex) {
    const project = projects[projectId];
    project.tasks.splice(taskIndex, 1);
    setProjects((prevProjects) => [...prevProjects, project]);
  }

  return (
    <div className="flex h-screen flex-col">
      <Header />
      <div className="flex flex-grow">
        <Sidebar
          projects={projects}
          currentProjectId={currentProjectId}
          setCurrentProjectId={setCurrentProjectId}
          onClick={handleClickCreate}
          onCreate={handleCreate}
        />
        <Content
          projects={projects}
          projectId={currentProjectId}
          onClick={handleClickCreate}
          onCreate={handleCreate}
          onCancel={handleCancel}
          onAddTask={handleAddTask}
          onRemoveTask={handleRemoveTask}
        />
      </div>
    </div>
  );
}

export default App;
