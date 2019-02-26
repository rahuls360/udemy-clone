import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Course from "./components/Course";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: {
        course1: {
          name: "ReactJS Course",
          image:
            "https://i.ytimg.com/vi/DLX62G4lc44/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLALJmXiU3DaUvF5BP_qBYtsO4Qs4A",
          description:
            "React is a JavaScript library for building dynamic web applications. Upon completion of this course, you'll know everything you need to know"
        },
        course2: {
          name: "NodeJS Crash Course",
          image:
            "https://i.ytimg.com/vi/fBNz5xF-Kx4/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLA7OC0inAR1IJP_GyQN3bLJRy1kzQ",
          description:
            "In this crash course we will explore Node.js fundamentals including modules such as path, url, fs, events and we will create an interesting app"
        }
      }
    };
  }
  render() {
    return (
      <div className="App">
        <Navbar> </Navbar>
        <div className="courses container">
          <div className="row">
            {Object.keys(this.state.courses).map(key => {
              return (
                <Course
                  image={this.state.courses[key].image}
                  description={this.state.courses[key].description}
                  key={key}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
