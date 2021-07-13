import React, { Component } from "react";

export default class Cell extends Component {
  constructor(props) {
    super();
    this.state = {
      color: value,
    };
  }

  render() {
    return <div id="cell" style={{ backgroundColor: this.state.color }}></div>;
  }
}
