import React, { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Switch from "./components/Switch";
const pagesArray = [
  { name: "home" },
  {
    name: "about",
  },
  { name: "portfolio" },
  { name: "contact" },
  {
    name: "resume",
  },
];
function App() {
  const [pages] = useState(pagesArray);
  const [currentPage, setCurrentPage] = useState(pagesArray[0]);
  console.log(currentPage);
  return (
    <div>
      <Header>
        <Nav
          pages={pages}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        ></Nav>
      </Header>
      <main>
        <Switch currentPage={currentPage}></Switch>
      </main>
      <Footer />
    </div>
  );
}
export default App;

// import Switch from "./components/Switch";

// function App() {
//   return (
//     <div>
//       <main>
//         <Switch></Switch>
//       </main>
//     </div>
//   );
// }

// export default App;
