import React from "react";
import earthquaketwo from "../../assets/earthquaketwo.jpeg";
import first from "../../assets/first.png";
import quiz from "../../assets/quiz.jpeg";
import madlib from "../../assets/madlib.jpeg";
import budget from "../../assets/budget.jpeg";
import cap from "../../assets/cap.jpeg";

function Portfolio() {
  return (
    <section style={{ backgroundColor: "#e6dbd0" }} className="my-5">
      <h1 id="portfolio">Portfolio</h1>
      <p>Here is some of my work!</p>
      <div class="serv">
        <ul>
          <li>
            {" "}
            <a href="https://jbeedle19.github.io/movers-not-shakers/">
              <img
                src={earthquaketwo}
                className="my-2"
                style={{ width: "50%" }}
                alt="project1"
              />
            </a>
            <div>
              <h3>Movers Not Shakers</h3>
            </div>
          </li>
          <li>
            {" "}
            <a href="https://mcannon33.github.io/mlc-profile.github.io/">
              <img
                src={first}
                className="my-2"
                style={{ width: "50%" }}
                alt="profile1"
              />
            </a>
            <div>
              <h3>My First Portfolio</h3>
            </div>
          </li>
          <li>
            <a href="https://mcannon33.github.io/code-quiz/">
              <img
                src={quiz}
                className="my-2"
                style={{ width: "50%" }}
                alt="quiz"
              />
            </a>
            <div>
              <h3>Code Quiz</h3>
            </div>
          </li>
          <li>
            <a href="https://desolate-beyond-80538.herokuapp.com/">
              <img
                src={madlib}
                className="my-2"
                style={{ width: "50%" }}
                alt="madlib"
              />
            </a>
            <div>
              <h3>Mad Libs</h3>
            </div>
          </li>
          <li>
            <a href="https://fast-ravine-30891.herokuapp.com/">
              <img
                src={budget}
                className="my-2"
                style={{ width: "50%" }}
                alt="budgettracker"
              />
            </a>
            <div>
              <h3>Budget Tracker</h3>
            </div>
          </li>
          <li>
            <a href="https://capitolcommunicator.com/maria-cannon-joins-crosby-marketing-communications-as-digital-program-manager/">
              <img
                src={cap}
                className="my-2"
                style={{ width: "50%" }}
                alt="project1"
              />
            </a>
            <div>
              <h3>Work History</h3>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
export default Portfolio;
