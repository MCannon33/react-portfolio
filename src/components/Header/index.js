import React from "react";
// import earthquake from "../../assets/earthquake.jpeg";
function Header(props) {
  return (
    <header className="flex-row space-between px-100">
      <h1>Header</h1>
      {/* <img src={earthquake} alt="wooden background"></img> */}
      {props.children}
    </header>
  );
}
export default Header;
