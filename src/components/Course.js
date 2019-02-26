import React from 'react';

class Course extends React.Component {
    render(){
        return <div className="course">
            <div className="col-md-6">
            <img src={this.props.image} alt=""/>
            <p>{this.props.description}</p>
            </div>
        </div>
    }
}

export default Course;