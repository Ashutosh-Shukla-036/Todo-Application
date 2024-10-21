import { useState } from "react";
import { AddTodo } from "../API_Calls/AddTodo";

export const CreateTodo = ( { onTodoAdded }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState("pending");
    const [message , setMessage] = useState("");

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        try {
            await AddTodo(title, description, status, setMessage);
            setTitle("");
            setDescription("");
            setStatus("pending");
            onTodoAdded();
            setTimeout(() => {
                setMessage("");
            }, 3000); 
        } catch(error) {
            setMessage("Internal server error" + error);
        }
    }


    return <form onSubmit={onSubmitHandler} className="createTodo">
        <div className="createTodoContiner">
        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required/>
        <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required/>
        <select value={status} onChange={(e) => setStatus(e.target.value)} required>
            <option>pending</option>
            <option>in-progress</option>
            <option>completed</option>
        </select>
        <button className="add-todo-btn">Add Todo</button>
        {message && <p>{message}</p>}
        </div>
    </form>
}  