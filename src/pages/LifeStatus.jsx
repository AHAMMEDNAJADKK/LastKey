import { useState } from "react";
import "../styles/lifestatus.css";

export default function LifeStatus(){
    const [lastCheckIn, setLastCheckIn] = useState(
        new Date().toLocaleDateString()
    );
    const [status,setStatus] = useState("Alive");
    
    const confirmAlive = () => {
        setLastCheckIn(new Date().toLocaleDateString());
        setStatus("Alive");
        alert("Life Status Confirmed");
    };

    return (
        <div className="life-status">
            <h1>Life Status</h1>
            <p className="desc"> Confirm your life status to keep your data locked</p>
            <div className="status-card">
                <h2>Status:<span className="alive">{status}</span></h2>
                <p>Last Check-in:{lastCheckIn}</p>

                <button onClick={confirmAlive}>I'm Alive</button>

            </div>
        </div>
    )
}
