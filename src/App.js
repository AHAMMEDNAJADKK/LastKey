import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import Vault from "./pages/Vault";
import Nominees from "./pages/Nominees";
import LifeStatus from "./pages/LifeStatus";
import TrustedContacts from "./pages/TrustedContacts";
import Assets from "./pages/Assets";
import "./styles/global.css"
import Landing from "./pages/Landing";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Landing />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/vault"
          element={
            <ProtectedRoute>
              <Vault />
            </ProtectedRoute>
          }
        />
        <Route
          path="/nominees"
          element={
            <ProtectedRoute>
              <Nominees />
            </ProtectedRoute>
          }
        />
        <Route
          path="/life-status"
          element={
            <ProtectedRoute>
              <LifeStatus />
            </ProtectedRoute>
          }
        />

        <Route
          path="/trusted-contacts"
          element={
            <ProtectedRoute>
              <TrustedContacts />
            </ProtectedRoute>
          }
        />
        <Route
          path="/assets"
          element={
            <ProtectedRoute>
              <Assets />
            </ProtectedRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;