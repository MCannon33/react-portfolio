import React from "react";
import camera from "../../assets/camera.jpeg";
const Home = () => (
  <div>
    <h1 id="home">Home Page</h1>

    <p>
      Ipsum dolor sit amet, consectetur adipiscing elit. Sed neque velit,
      lobortis ut magna varius, blandit rhoncus sem. Morbi lacinia nisi ac dui
      fermentum, sed luctus urna tincidunt. Etiam ut feugiat ex. Cras non risus
      mi. Curabitur mattis rutrum ipsum, ut aliquet urna imperdiet ac. Sed nec
      nulla aliquam, bibendum odio eget, vestibulum tortor. Cras rutrum ligula
      in tincidunt commodo. Morbi sit amet mollis orci, in tristique ex. Donec
      nec ornare elit. Donec blandit est sed risus feugiat porttitor. Vestibulum
      molestie hendrerit massa non consequat. Vestibulum vitae lorem tortor. In
      elementum ultricies tempus. Interdum et malesuada fames ac ante ipsum
      primis in faucibus.
    </p>
    <img src={camera} className="my-2" style={{ width: "100%" }} alt="cover" />
  </div>
);
export default Home;