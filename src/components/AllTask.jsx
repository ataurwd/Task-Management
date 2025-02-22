import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

const AllTask = () => {
  const {
    data: allTasks = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["allTasks"],
    queryFn: async () => {
      const response = await axios.get(
        "https://task-mangement-two.vercel.app/task"
      );
      return response.data; // Return the tasks
    },
  });
    
    if (isLoading) {
        return <div className="text-center min-h-screen grid place-items-center">Loading...</div>;
  
    }

  const handleDelete = async (id) => {
    await axios.delete(`https://task-mangement-two.vercel.app/task/${id}`);
    refetch();
  };

  const handleUpdate = async (id, newStatus) => {
    await axios.patch(`https://task-mangement-two.vercel.app/task/${id}`, {
      taskStatus: newStatus,
    });
    refetch();
  };

  return (
    <div className="rounded p-4 md:mt-10 mt-5 md:px-16 px-3">
      <div className="grid md:grid-cols-4 grid-cols-1 gap-5">
        {allTasks.map((task) => (
          <div key={task._id} className="bg-gray-100 rounded-md p-5">
            <div className="font-bold text-xl mb-2">{task.taskName}</div>
            <p className="text-gray-700 text-base mb-4">
              {task.taskDescription}
            </p>
            <div className="text-gray-600 mb-4">
              Status: <strong>{task.taskStatus}</strong>
            </div>
            <select
              defaultValue={task.taskStatus}
              onChange={(e) => handleUpdate(task._id, e.target.value)}
              className="border rounded-md p-1 mb-4 mr-3"
            >
              <option value="Completed">Completed</option>
              <option value="Incomplete">Incomplete</option>
            </select>
            <button
              onClick={() => handleDelete(task._id)}
              className="bg-red-400 px-3 py-1 rounded-md text-white cursor-pointer"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTask;
