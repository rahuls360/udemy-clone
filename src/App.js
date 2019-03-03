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
      courses: {}
    };
  }

  componentDidMount() {
    this.ref = base.syncState("Udemy-Clone", {
      context: this,
      state: "courses"
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  checkUser = userData => {
    console.log(this.state.courses);
    // if(userData.isNewUser){
    var immediatelyAvailableReference = base
      .post("users/" + userData.uid, {
        data: {
          courses: Array(Object.keys(this.state.courses).length).fill(false),
          userData: userData
        }
      })
      .then(newLocation => {
        var generatedKey = newLocation.key;
        console.log(newLocation);
      })
      .catch(err => {
        console.log(err);
      });
    // }
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
