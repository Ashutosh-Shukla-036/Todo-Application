import { Link } from "react-router-dom";

export const NavBar = ({ onLogout, isLoggedIn }) => {
    return (
        <nav className="navbar">
            <div className="navContainer">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to={'/about'}>About</Link></li>
                    {!isLoggedIn && (
                        <>
                            <li><Link to="/signup">Sign Up</Link></li>
                            <li><Link to="/login">Log In</Link></li>
                        </>
                    )}
                    {isLoggedIn && (
                        <>
                            <li><Link to="/todos">Todos</Link></li>
                        </>
                    )}
                </ul>
                {isLoggedIn && (
                    <button className="logoutButton" onClick={onLogout}>Log Out</button>
                )}
            </div>
        </nav>
    );
};
