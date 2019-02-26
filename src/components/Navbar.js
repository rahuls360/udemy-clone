import React from "react";

const Navbar = () => (
  <nav className="navbar navbar-inverse">
    <div className="container-fluid">
      <div className="navbar-header">
        <a className="navbar-brand" href="/">
          BuyMyCourse.com
        </a>
      </div>
      <ul className="nav navbar-nav">
        <li className="active">
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/courses">Courses</a>
        </li>
        <li>
          <a href="/login">Login</a>
        </li>
        <li>
          <a href="/register">Register</a>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
