import React from "react";
import earthquake from "../../assets/earthquake.jpeg";

function Portfolio() {
  return (
    <section style={{ backgroundColor: "#e6dbd0" }} className="my-5">
      <h1 id="portfolio">Portfolio</h1>
      <p>Here is some of my work!</p>
      <div class="serv">
        <ul>
          <li>
            1{" "}
            <a href="https://jbeedle19.github.io/movers-not-shakers/">
              <img
                src={earthquake}
                className="my-2"
                style={{ width: "50%" }}
                alt="project1"
              />
            </a>
          </li>
          <li>
            2{" "}
            <a href="https://mcannon33.github.io/mlc-profile.github.io/">
              <img
                src={earthquake}
                className="my-2"
                style={{ width: "50%" }}
                alt="project1"
              />
            </a>
          </li>
          <li>
            3
            <a href="https://jbeedle19.github.io/movers-not-shakers/">
              <img
                src={earthquake}
                className="my-2"
                style={{ width: "50%" }}
                alt="project1"
              />
            </a>
          </li>
          <li>
            4
            <a href="https://jbeedle19.github.io/movers-not-shakers/">
              <img
                src={earthquake}
                className="my-2"
                style={{ width: "50%" }}
                alt="project1"
              />
            </a>
          </li>
          <li>
            5
            <a href="https://jbeedle19.github.io/movers-not-shakers/">
              <img
                src={earthquake}
                className="my-2"
                style={{ width: "50%" }}
                alt="project1"
              />
            </a>
          </li>
          <li>
            6
            <a href="https://jbeedle19.github.io/movers-not-shakers/">
              <img
                src={earthquake}
                className="my-2"
                style={{ width: "50%" }}
                alt="project1"
              />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
export default Portfolio;
