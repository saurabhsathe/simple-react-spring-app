import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import Hello from 'mf_remote/Hello'
const App2 = () => (
  <div className="container">
    <div>Name: mf-host</div>
    <div>Framework: react</div>
    <div>Language: JavaScript</div>
    <div>CSS: Empty CSS</div>
  <Hello />
  </div>


);
ReactDOM.render(<App2 />, document.getElementById("app"));
