import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <div>
        <NavLink className="nav-link" to="/">
          Home
        </NavLink>
      </div>
      <div>
        <NavLink className="nav-link" to="/new">
          Criar Post
        </NavLink>
      </div>
    </div>
  );
}
