import Tasks from './Tasks';

function Project({ projectId, project, onAddTask, onRemoveTask }) {

  return (
    <div className="flex h-full w-full flex-grow flex-col justify-start">
      <p className="mb-2 text-5xl">{project.name}</p>
      <p className="mb-4 text-gray-300">{project.description}</p>
      <p className="font-semibold text-gray-500">{project.due}</p>
      <hr className="my-8 border-t border-gray-400" />
      <Tasks projectId={projectId} project={project} onAddTask={onAddTask} onRemoveTask={onRemoveTask} />
    </div>
  );
}

export default Project;
