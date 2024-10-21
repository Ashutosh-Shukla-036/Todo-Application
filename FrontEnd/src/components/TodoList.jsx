import { useState , useEffect } from 'react';
import { DisplayTodo } from './DisplayTodo';
import { CreateTodo } from './CreateTodo';
import { fetchData } from '../API_Calls/fetchTodos';

export const TodoList = () => {
    const [todos, setTodo] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");

    const getData = async () => {
        try {
            const todo = await fetchData();
            setTodo(todo)
        } catch(error) {
            setErrorMessage("Failed to load todos."+error);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            <h2>Add todo</h2>
            <CreateTodo onTodoAdded={getData}></CreateTodo>
            {errorMessage ? <p>{errorMessage}</p> : <DisplayTodo todos={todos} onTodoUpdated={getData}/>}
        </>
    );
}