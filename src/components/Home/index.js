import React from "react";
import camera from "../../assets/camera.jpeg";
const Home = () => (
  <section style={{ backgroundColor: "#e6dbd0" }}>
    <h1
      id="home"
      style={{
        padding: 5,
      }}
    >
      Home
    </h1>
    <p style={{ padding: 0 }}>
      Learning how to code has no doubt been a challenge for me....BUT it's a
      constant reminder that I was born to conquer challenges.
      <p />
      "Everybody in this country should learn to progeam a computer because it
      teaches you how to think" -- Steve Jobs
    </p>
    This site is a snapshot of my work -- I'm at the begining of a journey but
    it's just that a "journey."
    <p />
    <img src={camera} className="my-2" style={{ width: "100%" }} alt="cover" />
  </section>
);
export default Home;
