import React from "react";
import firebase from 'firebase';
import $ from 'jquery'

class Navbar extends React.Component{
  loginWithGoogle = () =>{
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then((result) => {
          let user = result.user;
          let userData = {
            displayName: user.displayName,
            photoURL: user.photoURL,
            email: user.email,
            uid: user.uid,
            authToken: result.credential.accessToken,
            isNewUser: result.additionalUserInfo.isNewUser
          }
          $('#login').modal('hide');

          this.props.checkUser(userData);

        }).catch((error) => {
          $('#login').modal('hide');
          console.log(error);
        });
      }
  render(){
    return (
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

        <div id="register" className="modal fade" role="dialog">
          <div className="modal-dialog">

            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">&times;</button>
                <h4 className="modal-title">Create an account</h4>
              </div>
              <div className="modal-body">
                <button>Sign up with Google Account</button>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal">X</button>
              </div>
            </div>

          </div>
        </div>

        <div id="login" className="modal fade" role="dialog">
          <div className="modal-dialog">

            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">&times;</button>
                <h4 className="modal-title">Login into your account</h4>
              </div>
              <div className="modal-body">
                <button onClick={this.loginWithGoogle}>Login with Google Account</button>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
              </div>
            </div>

          </div>
        </div>

        </>
    );
  }
}

export default Navbar;
