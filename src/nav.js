import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./assets/js/bootstrap.bundle.js";
import "bootstrap/dist/js/bootstrap.bundle.js";
export default function navB() {
  return (
    <nav
      className="navbar navbar-expand-xl navbar-dark bg-dark"
      aria-label="Sixth navbar example"
    >
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/home">
          Thin One Kill
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsExample06"
          aria-controls="navbarsExample06"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarsExample06">
          <ul className="navbar-nav me-auto mb-2 mb-xl-0">
            <li className="nav-item">
              <NavLink
                className="nav-link active"
                aria-current="page"
                to="/home"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <a className="nav-link"  href="http://localhost:8080/product">
                Products
              </a>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/order">
                Orders
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/user">
                Users
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <NavLink
                className="nav-link dropdown-toggle"
                id="dropdown06"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                to="/home"
              >
                Dropdown
              </NavLink>

              <ul className="dropdown-menu" aria-labelledby="dropdown06">
                <li>
                  <NavLink className="dropdown-item" to="/category">
                    Category
                  </NavLink>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="http://localhost:8080/commodity"
                  >
                    Commodity
                  </a>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/color">
                    Color
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/role">
                    Role
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/size">
                    Size
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>
          <form>
            <input
              className="form-control"
              type="text"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
        </div>
      </div>
      <script
        src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js"
        integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB"
      ></script>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js"
        integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13"
      ></script>
    </nav>
  );
}
