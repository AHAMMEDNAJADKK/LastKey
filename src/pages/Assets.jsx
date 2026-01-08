import { useState } from "react";
import "../styles/assets.css";

export default function Assets() {
    const [assets, setAssets] = useState([]);
    const [form, setForm] = useState({
        title: "",
        type: "Document",
        nominee: "",
        unlockAfter: "30",
    });
    const addAsset = (e) => {
        e.preventDefault();
        setAssets([...assets, form]);
        setForm({ title: "", type: "Document", nominee: "", unlockAfter: "30" });
    };
    return (
        <div className="assets">
            <h1>Digital Assets</h1>
            <p className="page-desc"> Assign assets to nominee with the time based access rules</p>

            <form className="asset-form" onSubmit={addAsset}>
                <input
                    placeholder="Asset Name"
                    value={form.title}
                    onChange={(e) => setForm({ ...form, title: e.target.value })}
                    required
                />

                <select
                    value={form.type}
                    onChange={(e) => setForm({ ...form, title: e.target.value })}
                >
                    <option> Document</option>
                    <option>Account</option>
                    <option>Secret</option>
                </select>

                <input
                    placeholder="Assign Nominee Email"
                    value={form.nominee}
                    onChange={(e) => setForm({ ...form, nominee: e.target.value })}
                    required
                />
                <select
                    value={form.unlockAfter}
                    onChange={(e) =>
                        setForm({ ...form, unlockAfter: e.target.value })
                    }
                >
                    <option value="7">7 Days</option>
                    <option value="30">30 Days</option>
                    <option value="90"> 90 Days</option>
                </select>
                <button>Add Asset</button>
            </form>

            <div className="asset-list">
                {assets.length === 0 ? (
                    <div className="empty-box">
                        <small>Your data remains locked until assets are assigned</small>
                    </div>
                ):(
                    assets.map((a,i) =>(
                        <div key={i} className="asset-card">
                            <h3>{a.title}</h3>
                            <p>Type:{a.type}</p>
                            <p>Nominee:{a.nominee}</p>
                            <p>Unlock After{a.unlockAfter} days</p>
                            <span className="locked">Locked</span>

                        </div>
                    ))
                )}

            </div>
        </div>
    );
}