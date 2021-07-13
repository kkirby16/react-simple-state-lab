import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { pattern1 } from "./data.js";
import { pattern2 } from "./data.js";
import { value } from "./data.js";
import Matrix from "./Matrix.js";
import Cell from "./Cell.js";

ReactDOM.render(
  <div>
    <Matrix values={pattern1} values2={pattern2} />
  </div>,
  document.getElementById("root")
);
