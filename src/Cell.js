import React, { Component } from "react";

export default class Cell extends Component {
  constructor(props) {
    console.log(props); //are props passed to components going to be hashes inside of that component?
    super();
    this.state = {
      color: props.value,
    };
  }

  changeColor = () => {
    this.setState({ color: "#333" });
  };

  render() {
    return (
      <div
        className="cell"
        style={{ backgroundColor: this.state.color }}
        onClick={this.changeColor}
      ></div>
    );
  }
}
