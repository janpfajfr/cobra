import React from "react";
import "../App.css";
import{ Link} from "react-router-dom"

function Nav() {
  return (
    <nav className="nav">
        <h3>Logo</h3>
        <ul className="nav-links">
            <Link className="nav-link" to='/about'>
              <li>About</li>
            </Link>
            <Link className="nav-link" to='/shop'>
              <li>Shop</li>
            </Link>
        </ul>
    </nav>
  );
}

export default Nav;
