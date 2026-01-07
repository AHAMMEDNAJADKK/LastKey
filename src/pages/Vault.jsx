import { useState } from "react";
import "../styles/vault.css";

export default function Vault() {
  const [documents, setDocuments] = useState([]);

  const handleUpload = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setDocuments([...documents, file.name]);
  };

  return (
    <div className="vault">
      <h1>Digital Vault</h1>
      <p>Store your most private documents securely</p>

      <div className="upload-box">
        <input type="file" onChange={handleUpload} />
        <p>Upload Document</p>
      </div>

      <div className="doc-list">
        {documents.length === 0 ? (
          <p className="empty">No documents uploaded</p>
        ) : (
          documents.map((doc, index) => (
            <div key={index} className="doc-item">
              {doc}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
