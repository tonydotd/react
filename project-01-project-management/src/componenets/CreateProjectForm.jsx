import { useRef, useState } from 'react';

function CreateProjectForm({ onCreate, onCancel }) {
  const form = useRef();
  const [formData, setFormData] = useState();

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  }

  function submit() {
    onCreate(formData);
    form.current.reset();
  }

  return (
    <div className="flex-grow p-12">
      <div className="flex justify-end">
        <button
          onClick={submit}
          className="mr-2 rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-800"
        >
          Create
        </button>
        <button
          onClick={onCancel}
          className="rounded-lg border border-gray-500 px-4 py-2 text-gray-700 transition hover:bg-gray-100"
        >
          Cancel
        </button>
      </div>
      <form ref={form} className="">
        <h2 className="mb-4 text-2xl font-semibold">Create Project</h2>

        <label className="mb-2 block text-gray-700">Name</label>
        <input
          type="text"
          name="name"
          className="mb-4 w-full rounded-lg border p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          onChange={handleChange}
        />

        <label className="mb-2 block text-gray-700">Description</label>
        <input
          type="text"
          name="description"
          className="mb-4 w-full rounded-lg border p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          onChange={handleChange}
        />

        <label className="mb-2 block text-gray-700">Select Date</label>
        <input
          type="date"
          name="due"
          className="w-full rounded-lg border p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          onChange={handleChange}
        />
      </form>
    </div>
  );
}

export default CreateProjectForm;
