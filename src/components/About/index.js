import React from "react";
import maria from "../../assets/maria.jpg";

function About() {
  return (
    <section className="my-5" style={{ backgroundColor: "#e6dbd0" }}>
      <h1 id="about">About Me</h1>

      <img src={maria} className="my-2" style={{ width: "20%" }} alt="maria" />
      <p style={{ flexWrap: "wrap" }}>
        I lead digital engagement plans for clients from concept to execution.
        Create print and web-based identity pieces to generate audience
        engagement and educate stakeholders. I slo handle social media
        platforms, content management systems and project management software.
        <span role="img" aria-label="camera">
          ☝️{" "}
        </span>
        Oop... and I am becoming a web developer!!{" "}
        <span role="img" aria-label="camera">
          🤓{" "}
        </span>
      </p>
    </section>
  );
}
export default About;
