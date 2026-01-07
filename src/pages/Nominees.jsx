import { useState } from "react";
import "../styles/nominees.css";

export default function Nominees() {
    const [nominees, setNominees] = useState([]);
    const [form, setForm] = useState({
        name: "",
        email: "",
        relation: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const addNominee = (e) => {
        e.preventDefault();
        setNominees([...nominees, form]);
        setForm({ name: "", email: "", relation: "" });
    };

    return (
        <div className="nominees">
            <h1>Nominee Management</h1>
            <p>Add people who can access your data after verification</p>

            <form className="nominee-form" onSubmit={addNominee}>
                <input
                    name="name"
                    placeholder="Nominee Name"
                    value={form.name}
                    onChange={handleChange}
                    required
                />
                <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={handleChange}
                    required
                />
                <input
                    name="relation"
                    placeholder="Relation (eg: Brother)"
                    value={form.relation}
                    onChange={handleChange}
                    required
                />

                <button type="submit">Add Nominee</button>
            </form>

            <div className="nominee-list">
                {nominees.length === 0 ? (
                    <p className="empty">No nominees added</p>
                ) : (
                    nominees.map((n, i) => (
                        <div key={i} className="nominee-card">
                            <h3>{n.name}</h3>
                            <p>{n.email}</p>
                            <p>Relation: {n.relation}</p>
                            <span className="status">Inactive</span>
                        </div>
                    ))
                )}
            </div>

        </div>
    );

}