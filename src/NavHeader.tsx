import { NavLink } from "react-router-dom";
import AuthStatus from "./security/AuthStatus";

export default function NavHeader() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/categories">Categories</NavLink>
        </li>
        <li>
          <NavLink to="/recipes">Recipes</NavLink>
        </li>
        <li>
          <NavLink to="/add">Add</NavLink>
        </li>
        <AuthStatus />
      </ul>
    </nav>
  );
}
