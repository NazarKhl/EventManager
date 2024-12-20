import { useState, useEffect } from "react";

export default function Projects() {
  const [projects, setProjects] = useState(() => {
    // Завантаження даних з LocalStorage під час ініціалізації
    const storedProjects = localStorage.getItem("projects");
    return storedProjects ? JSON.parse(storedProjects) : [];
  });

  const [newProject, setNewProject] = useState("");

  // Збереження даних у LocalStorage при зміні списку проєктів
  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(projects));
  }, [projects]);

  const addProject = () => {
    if (newProject.trim() === "") return;
    setProjects([...projects, newProject]);
    setNewProject("");
  };

  const removeProject = (index: number) => {
    setProjects(projects.filter((_, i) => i !== index));
  };

  return (
    <div className="absolute border bg-[#eeebeb] w-[870px] h-[640px] top-8 left-56 rounded-lg p-6 shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Projects</h2>

      <div className="mb-4">
        <input
          type="text"
          value={newProject}
          onChange={(e) => setNewProject(e.target.value)}
          placeholder="Enter project name"
          className="border rounded-lg p-2 w-3/4 mr-2"
        />
        <button
          onClick={addProject}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Add Project
        </button>
      </div>

      <ul className="list-disc ml-5">
        {projects.map((project, index) => (
          <li
            key={index}
            className="flex justify-between items-center mb-2 p-2 bg-white rounded-lg shadow-sm"
          >
            <span className="text-gray-800">{project}</span>
            <button
              onClick={() => removeProject(index)}
              className="text-red-500 hover:text-red-700"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>

      {projects.length === 0 && (
        <p className="text-gray-500 mt-4">No projects added yet.</p>
      )}
    </div>
  );
}
