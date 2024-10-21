import { useState } from "react"; 
import { RemoveTodo } from "../API_Calls/RemoveTodo";
import { UpdateTodoForm } from "./UpdateTodoForm";

export const DisplayTodo = ({ todos = [], onTodoUpdated }) => {
  const [deleteMessage, setDeleteMessage] = useState("");
  const [editTodo, setEditTodo] = useState(null);
  const [loading, setLoading] = useState(false);

  const DeleteTodo = async (taskID) => {
    setLoading(true);
    try {
      await RemoveTodo(taskID, setDeleteMessage);
      setTimeout(() => {
        setDeleteMessage("");
      }, 3000);
      onTodoUpdated();
    } catch (error) {
      setDeleteMessage(error); 
    } finally {
      setLoading(false); 
      setTimeout(() => {
        setDeleteMessage(""); 
      }, 3000);
    }
  };

  const handleEditClick = (todo) => {
    setEditTodo(todo); 
  };

  const handleCancelEdit = () => {
    setEditTodo(null); 
  };

  return (
    <div className="todoContainer">
      <h2>Todos</h2>
      {deleteMessage && <p>{deleteMessage}</p>}
      {loading && <p>Loading...</p>}
      {editTodo ? (
        <UpdateTodoForm
          todo={editTodo}
          onTodoUpdated={onTodoUpdated}
          onCancel={handleCancelEdit}
        />
      ) : (
        <div className="listContainer">
          {todos.length > 0 ? ( 
            todos.map((todo) => (
              <div className="todos" key={todo._id}>
                <h3>Title: {todo.title}</h3>
                <p>Description: {todo.description}</p>
                <p>Status: {todo.status}</p>
                <button onClick={() => DeleteTodo(todo._id)}>Delete</button>
                <button onClick={() => handleEditClick(todo)}>Update</button>
              </div>
            ))
          ) : (
            <p>No todos available. Please add some!</p> 
          )}
        </div>
      )}
    </div>
  );
};
