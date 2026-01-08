import { useState } from "react";
import "../styles/trusted.css";

export default function TrustedContacts() {
  const [contacts, setContacts] = useState([]);
  const [form, setForm] = useState({
    name: "",
    email: "",
  });

  const addContact = (e) => {
    e.preventDefault();
    setContacts([...contacts, form]);
    setForm({ name: "", email: "" });
  };

  return (
    <div className="trusted">
      <h1>Trusted Contacts</h1>
      <p>
        These people will be notified if you fail to confirm your life status
      </p>

      <form className="trusted-form" onSubmit={addContact}>
        <input
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />
        <button>Add Contact</button>
      </form>

      {contacts.map((c, i) => (
        <div key={i} className="contact-card">
          <h3>{c.name}</h3>
          <p>{c.email}</p>
        </div>
      ))}
    </div>
  );
}
