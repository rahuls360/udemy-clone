import React from "react";

const Navbar = () => (
  <>
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
        <a href="#" data-toggle="modal" data-target="#login" // eslint-disable-line
        >Login</a>
        </li>
        <li>
          <a href="#" data-toggle="modal" data-target="#register" // eslint-disable-line 
          >Register</a>
        </li>
      </ul>
    </div>
  </nav>

<div id="register" class="modal fade" role="dialog">
  <div class="modal-dialog">

    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title">Create an account</h4>
      </div>
      <div class="modal-body">
        <button>Sign up with Google Account</button>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">X</button>
      </div>
    </div>

  </div>
</div>

<div id="login" class="modal fade" role="dialog">
  <div class="modal-dialog">

    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title">Login into your account</h4>
      </div>
      <div class="modal-body">
        <button>Login with Google Account</button>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
      </div>
    </div>

  </div>
</div>

</>
);

export default Navbar;
