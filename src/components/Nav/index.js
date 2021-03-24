// import { className } from "postcss-selector-parser";
import React, { useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";
function Nav(props) {
  const { pages = [], setCurrentPage, currentPage } = props;
  useEffect(() => {
    document.title = capitalizeFirstLetter(currentPage.name);
  }, [currentPage]);
  return (
    <nav style={{ backgroundColor: "pink", height: 100, width: "100%" }}>
      <ul className="flex-row">
        {pages.map((Page) => (
          <li
            className={`mx-5 ${currentPage.name === Page.name && "navActive"}`}
            key={Page.name}
          >
            <span onClick={() => setCurrentPage(Page)}>
              {capitalizeFirstLetter(Page.name)}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
}
export default Nav;

// import React from "react";
// // import { capitalizeFirstLetter } from "../../utils/helpers";
// function Nav() {
//   return (
//     <header>
//       <h2>
//         <a href="/">
//           {/* <span role="img" aria-label="camera">
//             {" "}
//             📸
//           </span>{" "} */}
//           Home
//         </a>
//       </h2>
//       <nav>
//         <ul className="flex-row">
//           <li className="mx-2">
//             <a href="#about">About me</a>
//           </li>
//           <li className="mx-2">
//             <a href="portfolio">Portfolio</a>
//           </li>
//           <li className="mx-2">
//             <a href="#contact">Contact</a>
//           </li>
//           <li className="mx-2">
//             <a href="#resume">Resume</a>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// }

// export default Nav;
