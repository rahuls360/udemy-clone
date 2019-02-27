import React from "react";
import firebase from 'firebase';

class Navbar extends React.Component{
  loginWithGoogle = () =>{
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
          // This gives you a Google Access Token. You can use it to access the Google API.
          // var token = result.credential.accessToken;
          // The signed-in user info.
          var user = result.user;
          var userData = {
            displayName: user.displayName,
            photoURL: user.photoURL,
            email: user.email,
            uid: user.uid
          }
          console.log(userData);
          // ...
        }).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // The email of the user's account used.
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
          // ...
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
                <button onClick={this.loginWithGoogle}>Login with Google Account</button>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
              </div>
            </div>

          </div>
        </div>

        </>
    );
  }
}

export default Navbar;
