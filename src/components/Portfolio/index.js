import React from "react";
import earthquake from "../../assets/earthquake.jpeg";

function Portfolio() {
  return (
    <section className="my-5">
      <h1 id="portfolio">Portfolio</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum
        turpis sed ex condimentum molestie. Mauris condimentum lectus ut ornare
        dignissim.
      </p>
      <a href="https://jbeedle19.github.io/movers-not-shakers/">
        <img
          src={earthquake}
          className="my-2"
          style={{ width: "50%" }}
          alt="project1"
        />
      </a>
    </section>
  );
}
export default Portfolio;
