import React from "react";
import computer from "../../assets/computer.png";

function Resume() {
  return (
    <section style={{ backgroundColor: "#e6dbd0" }} className="my-5">
      <h1 id="resume">Resume</h1>
      <p>
        <h3>Proficient In:</h3>
        <ul className="rez">
          <li>Google Suite</li>
          <li>CSS</li>
          <li>ReAct</li>
          <li>GitHub</li>
        </ul>
      </p>
      <button>Download Resume</button>
    </section>
  );
}
export default Resume;
