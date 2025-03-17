import React from "react";
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div >
    <Link to="/">Logo</Link>
    <nav>
      <ul>
        <li>
          <Link to="../About">About</Link>
        </li>
        <li>
          <Link to="../Contact">Contact</Link>
        </li>
        <li>
          <Link to="../gasd">Works</Link>
        </li>
      </ul>
    </nav>
    </div>
  );
};

export default Nav;
