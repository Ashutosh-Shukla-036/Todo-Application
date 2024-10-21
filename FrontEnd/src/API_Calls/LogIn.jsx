export const LogIn = async (email, password) => {
    const response = await fetch('http://localhost:3000/auth/login', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
    });

    if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || 'Login failed');
    }

    const data = await response.json();
    localStorage.setItem('token', data.token); 
};
