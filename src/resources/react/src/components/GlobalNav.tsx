import React from "react";
import { Link } from "react-router-dom";

export const GlobalNav = () => {
  return (
    <ul>
      <li>
        <Link to="/">
          <span>Top</span>
        </Link>
      </li>
      <li>
        <Link to="/about">
          <span>About</span>
        </Link>
      </li>
      <li>
        <Link to="/register">
          <span>Register</span>
        </Link>
      </li>
    </ul>
  )
}
