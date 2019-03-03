import React from "react";
import Navbar from "./Navbar";

class Buy extends React.Component {
  render() {
    return (
      <>
      <Navbar></Navbar>
      <div className="buy">
        <img src={this.props.location.state.image} alt="" />
        <h3>{this.props.location.state.name}</h3>
        <p>{this.props.location.state.description}</p>
        <button className="btn btn-info">
          Rs {this.props.location.state.price}
        </button>
      </div>
      </>
    );
  }
}

export default Buy;
