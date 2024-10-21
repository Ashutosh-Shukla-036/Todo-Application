export const UpdateTodo = async ( taskId, title, description, status ) => {
    const token = localStorage.getItem('token');
    const response = await fetch(`https://todobackend-3xht.onrender.com/task/${taskId}`, {
        method: "PUT",
        headers: {
            "Authorization": `Bearer ${token}`, 
            "Content-Type": "application/json"
        },
        body: JSON.stringify({title, description, status})
    });

    if(!response.ok) {
        const data = await response.json()
        throw new Error(data.message);
    }

    const data = await response.json();
};