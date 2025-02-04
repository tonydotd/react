import CreateProjectForm from './CreateProjectForm';
import Project from './Project';

function Content({
  projects,
  onCreate,
  onCancel,
  onClick,
  projectId,
  onAddTask,
  onRemoveTask,
  ...props
}) {
  return (
    <main
      {...props}
      className="flex w-[60%] flex-grow items-center justify-center bg-white pt-24 pr-64 pl-8"
    >
      {projectId === -1 && (
        <div className="text-center">
          <h1 className="mb-4 text-2xl font-bold">No Project Selected</h1>
          <p className="mb-6 text-lg text-gray-500">
            Select a project or get started with a new one
          </p>
          <button
            onClick={onClick}
            className="rounded-lg bg-blue-500 px-6 py-2 text-white transition hover:bg-blue-600"
          >
            Create new project
          </button>
        </div>
      )}
      {projectId >= projects.length && (
        <CreateProjectForm onCreate={onCreate} onCancel={onCancel} />
      )}
      {projectId > -1 && projectId < projects.length && (
        <Project
          projectId={projectId}
          project={projects[projectId]}
          onAddTask={onAddTask}
          onRemoveTask={onRemoveTask}
        />
      )}
    </main>
  );
}

export default Content;
