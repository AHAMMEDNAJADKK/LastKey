import "../styles/landing.css";

export default function Landing() {
  return (
    <div className="landing">

      {/* HERO SECTION */}
      <section className="hero">
        <h1>LastKey</h1>
        <p>
          A secure digital will & asset nominee management system
          that protects your data beyond life.
        </p>
      </section>

      {/* FEATURES */}
      <section className="section">
        <h2>Why LastKey?</h2>
        <div className="grid">
          <div className="card">Digital Vault for private data</div>
          <div className="card">Nominee-based access control</div>
          <div className="card">Life-status verification system</div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section dark">
        <h2>How It Works</h2>
        <ol>
          <li>Add your private digital assets</li>
          <li>Assign nominees & trusted contacts</li>
          <li>Confirm life status periodically</li>
          <li>Assets unlock only after verification</li>
        </ol>
      </section>

      {/* SECURITY */}
      <section className="section">
        <h2>Security First</h2>
        <p>
          End-to-end encryption, time-locked access, audit trails,
          and multi-layer verification protect your digital legacy.
        </p>
      </section>

      {/* FOOTER */}
      <footer>
        <p>© {new Date().getFullYear()} LastKey. All rights reserved.</p>
      </footer>

    </div>
  );
}
