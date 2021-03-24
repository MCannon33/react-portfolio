import React, { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Switch from "./components/Switch";

function App() {
  const [pages] = useState([
    {
      name: "about",
    },
    { name: "portfolio" },
    { name: "contact" },
    {
      name: "resume",
    },
  ]);
  const [currentPage, setCurrentPage] = useState(pages[0]);
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
