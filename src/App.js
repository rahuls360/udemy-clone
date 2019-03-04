import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Course from "./components/Course";
import base from "./base";

import "bootstrap/dist/css/bootstrap.css";

if (typeof window !== "undefined") {
  window.jQuery = window.$ = require("jquery");
  require("bootstrap");
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: {},
      user: {},
      myCourse: []
    };
  }

  componentDidMount() {
    this.courseRef = base.syncState("Udemy-Clone", {
      context: this,
      state: "courses"
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.courseRef);
    base.removeBinding(this.myCourseRef);
  }

  checkUser = userData => {
    this.setState({ user: userData });
    if (userData.isNewUser) {
      var immediatelyAvailableReference = base
        .post("users/" + userData.uid, {
          data: {
            courses: Array(Object.keys(this.state.courses).length).fill(false),
            userData: userData
          }
        })
        .then(() => {
          console.log("User created");
        })
        .catch(err => {
          console.log(err);
        });
    }
    // else {
    // base
    //   .fetch("users/" + userData.uid + "/courses", {
    //     context: this,
    //     asArray: true
    //   })
    //   .then(data => {
    //     console.log(data);
    //     this.setState({ myCourse: data });
    //   })
    //   .catch(error => {
    //     //handle error
    //     console.log(error);
    //   });
    // }
    this.myCourseRef = base.syncState("users/" + userData.uid + "/courses", {
      context: this,
      state: "myCourse"
    });
  };

  render() {
    return (
      <div className="App">
        <Navbar checkUser={this.checkUser}> </Navbar>
        <div className="courses container">
          <div className="row">
            {Object.keys(this.state.courses).map(key => {
              return (
                <Course {...this.state.courses[key]} key={key} index={key} />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
