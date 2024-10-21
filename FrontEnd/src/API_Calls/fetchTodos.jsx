export const fetchData = async () => {
    const token = localStorage.getItem('token'); 

    const response = await fetch("https://todobackend-3xht.onrender.com/task", {
    method: "GET",
    headers: {
            "Authorization": `Bearer ${token}`, 
            "Content-Type": "application/json"
        }
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
    }

    const data = await response.json();
    console.log('Fetched data:', data);
    return data.tasks;
};

