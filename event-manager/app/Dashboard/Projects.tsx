"use client"
import { useState, useEffect } from "react";

export default function Projects() {
  const [projects, setProjects] = useState(() => {
    const storedProjects = localStorage.getItem("projects");
    return storedProjects ? JSON.parse(storedProjects) : [];
  });

  const [newProject, setNewProject] = useState({ title: "", description: "", status: "Pending" });
  const [filterStatus, setFilterStatus] = useState("All");
  const [editingProjectId, setEditingProjectId] = useState(null);
  const [editedProject, setEditedProject] = useState({ title: "", description: "" });

  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(projects));
  }, [projects]);

  const addProject = () => {
    if (newProject.title.trim() === "" || newProject.description.trim() === "") return;
    setProjects([...projects, { ...newProject, id: Date.now(), completed: false }]);
    setNewProject({ title: "", description: "", status: "Pending" });
  };

  const updateProjectStatus = (id: number, status: any) => {
    setProjects(projects.map((proj: any) => (proj.id === id ? { ...proj, status, completed: status === "Completed" } : proj)));
  };

  const startEditing = (project: any) => {
    setEditingProjectId(project.id);
    setEditedProject({ title: project.title, description: project.description });
  };

  const saveEdits = (id: number) => {
    setProjects(
      projects.map((proj: any) => (proj.id === id ? { ...proj, title: editedProject.title, description: editedProject.description } : proj))
    );
    setEditingProjectId(null);
    setEditedProject({ title: "", description: "" });
  };

  const removeProject = (id:number) => {
    setProjects(projects.filter((proj: any) => proj.id !== id));
  };

  const filteredProjects = filterStatus === "All"
    ? projects
    : projects.filter((proj: any) => proj.status === filterStatus);

  return (
    <div className="absolute border bg-[#eeebeb] w-[1130px] h-[853px] top-8 left-56 rounded-lg p-6 shadow-lg overflow-auto">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Projects</h2>

      {/* Add New Project */}
      <div className="mb-6">
        <input
          type="text"
          value={newProject.title}
          onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
          placeholder="Project Title"
          className="border rounded-lg p-2 w-full mb-2"
        />
        <textarea
          value={newProject.description}
          onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
          placeholder="Project Description"
          className="border rounded-lg p-2 w-full mb-2"
        />
        <button
          onClick={addProject}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 w-full"
        >
          Add Project
        </button>
      </div>

      {/* Filter */}
      <div className="mb-4">
        <label className="block mb-2 text-gray-700 font-medium">Filter by Status:</label>
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="border rounded-lg p-2 w-full"
        >
          <option value="All">All</option>
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
      </div>

      {/* Projects List */}
      {filteredProjects.length > 0 ? (
        <ul>
          {filteredProjects.map((proj: any) => (
            <li
              key={proj.id}
              className={`p-4 mb-4 rounded-lg shadow-sm flex flex-col gap-2 transition-transform transform ${
                proj.completed ? "bg-green-100 scale-95" : "bg-white"
              }`}
            >
              {editingProjectId === proj.id ? (
                <>
                  <input
                    type="text"
                    value={editedProject.title}
                    onChange={(e) => setEditedProject({ ...editedProject, title: e.target.value })}
                    className="border rounded-lg p-2 w-full mb-2"
                  />
                  <textarea
                    value={editedProject.description}
                    onChange={(e) =>
                      setEditedProject({ ...editedProject, description: e.target.value })
                    }
                    className="border rounded-lg p-2 w-full mb-2"
                  />
                  <button
                    onClick={() => saveEdits(proj.id)}
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 w-full"
                  >
                    Save Changes
                  </button>
                </>
              ) : (
                <>
                  {/* Display Project */}
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold">{proj.title}</h3>
                    <button
                      onClick={() => removeProject(proj.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      Remove
                    </button>
                  </div>
                  <p className="text-gray-700">{proj.description}</p>
                  <div className="flex gap-2">
                    {!proj.completed ? (
                      <button
                        onClick={() => updateProjectStatus(proj.id, "Completed")}
                        className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 w-full"
                      >
                        Mark as Done
                      </button>
                    ) : (
                      <button
                        onClick={() => updateProjectStatus(proj.id, "Pending")}
                        className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 w-full"
                      >
                        Mark as Pending
                      </button>
                    )}
                    <button
                      onClick={() => startEditing(proj)}
                      className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 w-full"
                    >
                      Edit
                    </button>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No projects found.</p>
      )}
    </div>
  );
}
