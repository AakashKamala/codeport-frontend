import { BrainCircuit } from "lucide-react";
import "./logo.css"
import { NavLink } from "react-router-dom";

const Logo = () => {
  return (
    <div>
      <div
        className="logo"
        style={{
          display: "inline-flex", // Inline layout
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "8px",
          padding: "5px 10px",
          gap: "5px",
        }}
      >
        <NavLink className="link" to="/">
          <h1 style={{ display: "inline", margin: 0 }}>CO</h1>
          <BrainCircuit size={24} />
          <h1 style={{ display: "inline", margin: 0 }}>E</h1>
        </NavLink>
        <NavLink to="/deploy">Deploy</NavLink>
      </div>
    </div>
  );
};

export default Logo;
