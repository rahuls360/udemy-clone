import React from 'react';

const Navbar = () => (
<nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="/">BuyMyCourse.com</a>
    </div>
    <ul class="nav navbar-nav">
      <li class="active"><a href="/">Home</a></li>
      <li><a href="/courses">Courses</a></li>
      <li><a href="/login">Login</a></li>
      <li><a href="/register">Register</a></li>
    </ul>
  </div>
</nav>
);

export default Navbar;