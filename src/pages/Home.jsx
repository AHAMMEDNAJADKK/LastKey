import "../styles/main.css";
import Navbar from "../components/Navbar";

export default function Home() {
    return (
        <>
            <Navbar />

            <section className="hero">
                <h1>Your Life's Final Access Key</h1>
                <p>
                    Store your most private documents securely.
                    Release them only to the right person, at the right time.
                </p>

                <div className="hero-actions">
                    <button>Get Started</button>
                    <button className="ghost">How It Works</button>
                </div>
            </section>
            <section className="steps">
                <div className="step">
                    <h3>1. Store Securely</h3>
                    <p>Upload and encrypt your private documents and assets.</p>
                </div>

                <div className="step">
                    <h3>2. Assign Nominees</h3>
                    <p>Choose who can access your data after verified death.</p>
                </div>

                <div className="step">
                    <h3>3. Verified Release</h3>
                    <p>Data is released only after legal and trusted verification.</p>
                </div>
            </section>

            <section className="store">
                <h2>What You Can Store</h2>

                <ul>
                    <li>Government IDs</li>
                    <li>Property & Legal Documents</li>
                    <li>Financial Records</li>
                    <li>Passwords & Secure Notes</li>
                    <li>Personal Messages</li>
                </ul>
            </section>
            <section className="security">
                <h2>Security First. Always.</h2>
                <p>
                    End-to-end encryption, time-locked access,
                    and multi-layer death verification.
                </p>
            </section>

            <section className="cta">
                <h2>Secure Today. Share When It Matters.</h2>
                <button>Create Your LastKey</button>
            </section>






        </>
    );
}