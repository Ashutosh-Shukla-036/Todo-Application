export const fetchData = async () => {
    const token = localStorage.getItem('token'); 

    const response = await fetch("http://localhost:3000/task", {
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

