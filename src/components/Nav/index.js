import React, { useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";
function Nav(props) {
  const { pages = [], setCurrentPage, currentPage } = props;
  useEffect(() => {
    console.log(currentPage);
    if (currentPage && currentPage.name) {
      document.title = capitalizeFirstLetter(currentPage.name);
    }
  }, [currentPage]);
  return (
    <nav style={{ backgroundColor: "#FAD4C0", height: 100 }}>
      <ul className="nav ">
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
// import { className } from "postcss-selector-parser";
