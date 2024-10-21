import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { SignUpUser } from './components/SignUpUser';  
import { Home } from './components/Home';
import { TodoList } from './components/TodoList';
import { Login } from './components/Login';
import { useEffect, useState } from 'react';
import { NavBar } from './components/NavBar';
import About from './components/About';
import './App.css';


function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
          setIsLoggedIn(true);
        }
    }, []);

    const handleLogIn = () => {
        setIsLoggedIn(true);
    };

    const handleLogOut = () => {
        localStorage.removeItem('token');
        setIsLoggedIn(false);
    };

    return (
        <>
            <Router>
                <NavBar onLogout={handleLogOut} isLoggedIn={isLoggedIn} />
                <div className="container">
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/signup' element={<SignUpUser />} />
                    <Route path='/login' element={<Login onLoginSuccess={handleLogIn} />} />
                    <Route path="/todos" element={isLoggedIn ? <TodoList /> : <Navigate to="/login" />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
                </div>
            </Router>
        </>
    );
}

export default App;
