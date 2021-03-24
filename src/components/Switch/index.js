import React, { useState } from "react";
import About from "../../components/About/index.js";
import Nav from "../../components/Nav";
import Portfolio from "../../components/Portfolio";
import Contact from "../../components/Contact";
import Resume from "../../components/Resume";
import Home from "../../components/Home";
function Switch() {
  const [currentPage, handlePageChange] = useState("Home");

  const renderPage = () => {
    switch (currentPage.name) {
      case "about":
        return <About />;
      case "portfolio":
        return <Portfolio />;
      case "contact":
        return <Contact />;
      case "resume":
        return <Resume />;
      default:
        return <Home />;
    }
  };
  return (
    <div>
      {/* Pass the state value and the setter as props to NavTabs */}
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Call the renderPage function passing in the currentPage */}
      <div>{renderPage(currentPage)}</div>
    </div>
  );
}
export default Switch;
// white_check_mark
// eyes
// raised_hands::skin-tone-5
