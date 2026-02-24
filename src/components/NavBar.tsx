import { Link } from "react-router-dom"

export default function NavBar() {
  return (
    <div style={{
      border: "1px solid #000",
      width: "15rem",
      height: "60rem",
      padding: "9px",
      gap: "3px",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
    }}>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/touhou10">Touhou 10: Mountan Of Faith</Link>
    </div>
  );
}
