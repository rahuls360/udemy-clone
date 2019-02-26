import React from "react";
import { Link } from "react-router-dom";

class Course extends React.Component {
  render() {
    return (
      <div className="course">
        <div className="col-md-6">
          <img src={this.props.image} alt="" />
          <h3 className="text-center">
            <Link
              to={{
                pathname: `/courses/${this.props.index}`,
                state: { ...this.props }
              }}
            >
              {this.props.name}
            </Link>
          </h3>
          <p>{this.props.description}</p>
        </div>
      </div>
    );
  }
}

export default Course;
