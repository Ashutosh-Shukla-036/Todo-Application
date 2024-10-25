export const SignUp = async ( username, email, password, setSignupstatus ) => {
    const response = await fetch(`https://todobackend-3xht.onrender.com/auth/signup`, {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({ username, email, password })
    });

    if(!response.ok) {
        const data = await response.json();
        throw new Error(data.message);
    }

    const data = await response.json();
    setSignupstatus(data.message);
}