import { NavLink } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import iconTodo from "./../img/iconTodo.png";

const Navbar = () => {
  const isActiveLink = ({ isActive }) => {
    return isActive ? "nav-link navbar-link--active" : "nav-link";
  };
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <NavLink className="navbar-brand iconTodo" to="/">
          <img className="iconTodo" src={iconTodo} alt="" />
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink className={isActiveLink} to="/" aria-current="page">
              Home
            </NavLink>
            <NavLink className={isActiveLink} to="/details" aria-current="page">
              📚
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
