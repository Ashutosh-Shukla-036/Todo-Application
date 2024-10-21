export const RemoveTodo = async ( taskID , setDeleteMessage ) => {
    const token = localStorage.getItem('token');

    const response = await fetch(`https://todobackend-3xht.onrender.com/task/${taskID}` , {
        method: "DELETE",
        headers: {
            "Authorization": `Bearer ${token}`, 
            "Content-Type": "application/json"
        }
    });

    if(!response.ok) {
        const data = response.json();
        throw new Error(data.message);
    }

    const data = response.json();
    setDeleteMessage(data.message);
}