import { useState } from "react"
import { SignUp } from "../API_Calls/Signup";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export const SignUpUser = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [signupstatus, setSignupstatus] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        setIsLoading(true); 
        try {
            await SignUp(username, email, password, setSignupstatus);
            navigate("/login");
            setUsername("");
            setEmail("");
            setPassword("");
        } catch(error) {
            setSignupstatus("Internal server error:" + error);
        } finally {
            setIsLoading(false); 
        }
    };

    return <form onSubmit={onSubmitHandler} className="Signupform">
        <div className="signupConatiner">
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required/>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
        <button type="submit">Submit</button>
        {isLoading && <p>Signing Up...</p>}
        {signupstatus && <p>{signupstatus}</p>}
        <p>Already Registered<Link to={"/Login"}>Click here to Login</Link></p>
        </div>
    </form>
}