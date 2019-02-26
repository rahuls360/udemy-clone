import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Course from './components/Course';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar></Navbar>
        <div className="courses container">
          <div className="row">
            <Course image="https://i.ytimg.com/vi/DLX62G4lc44/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLALJmXiU3DaUvF5BP_qBYtsO4Qs4A" description="React is a JavaScript library for building dynamic web applications. Upon completion of this course, you'll know everything you need to know"></Course>
            <Course image="https://i.ytimg.com/vi/DLX62G4lc44/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLALJmXiU3DaUvF5BP_qBYtsO4Qs4A" description="React is a JavaScript library for building dynamic web applications. Upon completion of this course, you'll know everything you need to know"></Course>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
