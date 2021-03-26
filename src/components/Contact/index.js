import React from "react";
import earthquake from "../../assets/earthquake.jpeg";

function Contact() {
  return (
    <section className="my-5">
      <h1 id="contact">Contact</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum
        turpis sed ex condimentum molestie. Mauris condimentum lectus ut ornare
        dignissim.
      </p>
      <img
        src={earthquake}
        className="my-2"
        style={{ width: "50%" }}
        alt="project1"
      />
    </section>
  );
}
export default Contact;
