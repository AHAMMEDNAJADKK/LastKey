import { Link } from "react-router-dom";
import "../styles/sidebar.css"
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Sidebar() {
    const {logout} = useContext(AuthContext);
    return (
        <aside className="sidebar">
            <h2>LastKey</h2>

            <nav>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/vault">Digital Vault</Link>
                <Link to="/assets">Assets</Link>
                <Link to="/nominees">Nominees</Link>
                <Link to="/trusted">Trusted Contacts</Link>
                <Link to="/status">Life Status</Link>
            </nav>
            const {logout} = useContext(AuthContext);

            <button onClick={logout}>Logout</button>

        </aside>
    );
}