import { useState, useEffect } from "react";
import { UpdateTodo } from "../API_Calls/UpdateTodo";

export const UpdateTodoForm = ({ todo, onTodoUpdated, onCancel }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("pending");

  useEffect(() => {
    if (todo) {
      setTitle(todo.title);
      setDescription(todo.description);
      setStatus(todo.status);
    }
  }, [todo]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await UpdateTodo(todo._id, title, description, status ); 
      onTodoUpdated(); 
      onCancel();
    } catch (error) {
      console.error("Failed to update todo:"+ error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="UpdatedContainer">
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
      <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} required />
      <select value={status} onChange={(e) => setStatus(e.target.value)} required>
        <option value="pending">pending</option>
        <option value="in-progress">in-progress</option>
        <option value="completed">completed</option>
      </select>
      <button type="submit" className="update-btn">Update</button>
      <button type="button" onClick={onCancel} className="cancel-btn">Cancel</button>
      </div>
    </form>
  );
};
