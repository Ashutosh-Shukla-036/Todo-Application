import { useState } from "react";
import { LogIn } from "../API_Calls/LogIn";
import { Link, useNavigate } from "react-router-dom";

export const Login = ({ onLoginSuccess }) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault(); 
        setIsLoading(true);
        try {
            await LogIn(email, password);
            onLoginSuccess(); 
            navigate('/');
        } catch (error) {
            setErrorMessage("Internal server error: " + error.message);
        } finally {
            setIsLoading(false); 
        }
    };

    return (
        <form className="LoginForm" onSubmit={handleSubmit}>
            <div className="loginContainer">
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <button type="submit">Submit</button>
            {isLoading && <p>Logging In...</p>}
            <p>Not yet Registered<Link to={'/signup'}>Click here to SignUp</Link></p>
            {errorMessage && <p>{errorMessage}</p>}
            </div>
        </form>
    );
};
