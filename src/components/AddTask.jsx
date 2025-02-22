import axios from "axios";
import React from "react";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";

const TaskForm = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    await axios
      .post("https://task-mangement-two.vercel.app/task", data)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            title: "task Added!",
            icon: "success",
          });
        }
      });
    reset();
  };

  return (
    <div className="flex items-center justify-center min-h-[80vh]">
      <div className="bg-white p-6 rounded-lg shadow-md w-[500px]">
        <h2 className="text-xl font-semibold mb-4">Task Form</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Task Name
            </label>
            <input
              type="text"
              {...register("taskName", { required: true })}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              {...register("taskDescription", { required: true })}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Status
            </label>
            <select
              {...register("taskStatus", { required: true })}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            >
              <option value="Completed">Completed</option>
              <option value="Incomplete">Incomplete</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full cursor-pointer bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default TaskForm;
