import React from "react";
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className="flex justify-between">
    <Link to="/">Logo</Link>
    <nav >
      <ul className="flex items-center gap-4">
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
