import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Course from "./components/Course";
import base from "./base";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: {}
    };
  }

  componentDidMount(){
    this.ref = base.syncState("Udemy-Clone", {
      context: this,
      state: "courses"
    });
  }

  componentWillUnmount(){
    base.removeBinding(this.ref);
  }

  render() {
    return (
      <div className="App">
        <Navbar> </Navbar>
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
