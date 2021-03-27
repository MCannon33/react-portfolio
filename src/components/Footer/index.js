import React from "react";
import linkone from "../../assets/linkone.png";
import githubone from "../../assets/githubone.png";

function Footer() {
  return (
    <div className="footer">
      <div class="servone">
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/marialcannon/">
              <img
                src={linkone}
                className="my-2"
                style={{ width: "10%" }}
                alt="linkedlin"
              />
            </a>
          </li>
          <li>
            <a href="https://github.com/MCannon33">
              <img
                src={githubone}
                className="my-2"
                style={{ width: "10%" }}
                alt="github"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Footer;
