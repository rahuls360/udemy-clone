import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Course from "./components/Course";
import base from "./base";

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
            "React is a JavaScript library for building dynamic web applications. Upon completion of this course, you'll know everything you need to know",
          price: 777,
          link: "https://www.youtube.com/watch?v=DLX62G4lc44"
        },
        course2: {
          name: "NodeJS Crash Course",
          image:
            "https://i.ytimg.com/vi/fBNz5xF-Kx4/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLA7OC0inAR1IJP_GyQN3bLJRy1kzQ",
          description:
            "In this crash course we will explore Node.js fundamentals including modules such as path, url, fs, events and we will create an interesting app",
          price: 2777,
          link: "https://www.youtube.com/watch?v=fBNz5xF-Kx4"
        },
        course3: {
          name: "Redux Crash Course with React",
          image:
            "https://i.ytimg.com/vi/93p3LxR9xfM/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLClKsKU7RdsY5fSd8cQq9mGAhu6-w",
          description:
            "In this video we will talk about what Redux is and build a React app from scratch and add all of the boilerplate for Redux and work on an application",
          price: 1999,
          link: "https://www.youtube.com/watch?v=93p3LxR9xfM"
        },
        course4: {
          name: "Firebase Basics",
          image:
            "https://i.ytimg.com/vi/9kRgVxULbag/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCobYSKTKWX9O1VSLIZJ945B75tUQ",
          description:
            "Master the basics of Firebase in 20 minutes. In this episode, we run through hosting, auth, firestore, storage, and cloud functions using nothing but plain JavaScript.",
          price: 999,
          link: "https://www.youtube.com/watch?v=9kRgVxULbag"
        }
      }
    };
  }

  componentDidMount() {
    this.ref = base.syncState("Udemy-Clone", {
      context: this,
      state: "courses"
    });
  }

  componentWillUnmount() {
    // base.removeBinding(this.ref);
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
