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

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        try {
            await SignUp(username, email, password, setSignupstatus);
            navigate("/Login");
            setUsername("");
            setEmail("");
            setPassword("");
        } catch(error) {
            setSignupstatus("Internal server error:" + error);
        }
    };

    return <form onSubmit={onSubmitHandler} className="Signupform">
        <div className="signupConatiner">
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required/>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
        <button type="submit">Submit</button>
        {signupstatus && <p>{signupstatus}</p>}
        <p>Already Registered<Link to={"/Login"}>Click here to Login</Link></p>
        </div>
    </form>
}