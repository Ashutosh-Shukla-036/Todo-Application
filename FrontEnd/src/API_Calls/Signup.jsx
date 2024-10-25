export const SignUp = async ( username, email, password, setSignupstatus ) => {
    const response = await fetch(`https://todobackend-3xht.onrender.com/auth/signup`, {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({ username, email, password })
    });

    if (!response.ok) {
        const data = await response.json();
        const errorMessage = data.errors ? data.errors.map(err => err.message).join(', ') : "Something went wrong";
        throw new Error(errorMessage);
    }

    const data = await response.json();
    setSignupstatus(data.message);
}