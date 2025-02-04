import Projects from './Projects';

function Sidebar({
  projects,
  currentProjectId,
  setCurrentProjectId,
  onClick,
  onCreate,
  ...props
}) {
  return (
    <aside {...props} className="w-[30%] bg-black px-16 py-24 text-white">
      <h1 className="mb-4 text-lg font-semibold">Sidebar Header</h1>
      <button
        type="button"
        className="rounded-lg bg-stone-700 px-4 py-2 text-gray-300 hover:bg-stone-500"
        onClick={onClick}
      >
        + Add Project
      </button>
      <Projects
        projects={projects}
        currentProjectId={currentProjectId}
        setCurrentProjectId={setCurrentProjectId}
        onCreate={onCreate}
      />
    </aside>
  );
}

export default Sidebar;
