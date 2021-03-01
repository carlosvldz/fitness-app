import React from "react";
import "./styles/Welcome.css";

function Welcome(props) {
  return (
    <div className="container">
      <divc className="Fitness-User-Info">
        <h1>Hello {props.username}!</h1>
        <p>Let´s workout to get someone gains!</p>
      </divc>
    </div>
  );
}

export default Welcome;
