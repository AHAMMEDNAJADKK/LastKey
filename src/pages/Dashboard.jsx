import Sidebar from "../components/Sidebar";
import "../styles/dashboard.css";

export default function Dashboard(){
    return(
        <div className="dashboard">
            <Sidebar/>

            <div className="dashboard-content">
                <h1>WElcome to LastKey</h1>
                <p>Your secure digital legacy vault</p>

                <div className="cards">
                    <div className="card">
                   <h3>Documents Stored</h3>
                   <p>5 Files</p>
                    </div>
                    
          <div className="card">
            <h3>Assets Added</h3>
            <p>3 Assets</p>
          </div>

          <div className="card">
            <h3>Nominees</h3>
            <p>2 People</p>
          </div>

          <div className="card">
            <h3>Life Status</h3>
            <p className="active">Active</p>
          </div>

                </div>

            </div>

        </div>
    )
}