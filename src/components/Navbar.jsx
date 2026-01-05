import {Link} from "react-router-dom"
import "../styles/Navbar.css"

export default function Navbar(){
    return (
        <nav className="navbar">
            <h2 className="logo">LastKey</h2>
            <div className="nav-links">
                <Link to="/login">Login</Link>
                <Link to="/register" className="btn-outline">Get Started</Link>
            </div>
        </nav>
    );
}