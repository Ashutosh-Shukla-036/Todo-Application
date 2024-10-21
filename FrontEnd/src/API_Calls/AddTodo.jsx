export const AddTodo = async (title, description, status, setMessage) => {
    const token = localStorage.getItem('token'); 

    const response = await fetch("https://todobackend-3xht.onrender.com/task", {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${token}`, 
            "Content-Type": "application/json"
        },
        body: JSON.stringify({title , description , status})
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
    }
    
    const data = await response.json();
    setMessage(data.message);
}