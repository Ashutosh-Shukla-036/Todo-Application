export const RemoveTodo = async ( taskID , setDeleteMessage ) => {
    const token = localStorage.getItem('token');

    const response = await fetch(`http://localhost:3000/task/${taskID}` , {
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