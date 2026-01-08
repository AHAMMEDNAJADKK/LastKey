export default function Settings() {
  return (
    <div className="settings">
      <h1>Settings</h1>

      <div className="card">
        <h3>Life Check Interval</h3>
        <p>Choose how often you want to confirm your life status</p>
        <select>
          <option>Every 7 days</option>
          <option>Every 30 days</option>
          <option>Every 90 days</option>
        </select>
      </div>
    </div>
  );
}
