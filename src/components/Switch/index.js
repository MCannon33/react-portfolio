import React, { useState } from "react";
import About from "../../components/About/index.js";
import Nav from "../../components/Nav";
import Portfolio from "../../components/Portfolio";
import Contact from "../../components/Contact";
import Resume from "../../components/Resume";
import Home from "../../components/Home";
function Switch(props) {
  console.log(props);
  // const [currentPage, handlePageChange] = ;

  const renderPage = () => {
    switch (props.currentPage.name) {
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
  return <div>{renderPage(props.currentPage)}</div>;
}
export default Switch;
