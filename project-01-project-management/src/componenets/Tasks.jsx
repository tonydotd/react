import { useState } from 'react';

function Tasks({ projectId, project, onAddTask, onRemoveTask }) {
  const [input, setInput] = useState('');

  function handleChange(e) {
    setInput(e.target.value);
  }

  function handleAddTask(task) {
    onAddTask(projectId, task);
    setInput('');
  }

  return (
    <div>
      <h2 className="mb-2 text-4xl font-bold">Tasks</h2>
      <div className="flex items-center justify-start">
        <input
          type="text"
          className="rounded-sm bg-gray-800 p-2 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
          onChange={handleChange}
          value={input}
        />
        <button
          onClick={() => handleAddTask(input)}
          className="ml-2 rounded-lg bg-green-500 px-4 py-2 font-semibold text-white transition hover:bg-green-600"
        >
          Add task
        </button>
      </div>
      <ul>
        {project.tasks.map((task, index) => (
          <li key={index}>
            <div className="flex items-center justify-between">
              <span>{task}</span>
              <button onClick={() => onRemoveTask(index)}>Clear</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tasks;
