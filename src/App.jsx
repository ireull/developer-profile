import { useState } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

import Context from "./context/context";

function App() {
  const [skills, setSkills] = useState([
    { name: "Ruby", exp: 2 },
    { name: "PHP", exp: 6 },
    { name: "JavaScript", exp: 4 },
  ]);
  
  const skillSort = skills.sort((a, b) => (a.exp > b.exp ? -1 : 1));

  return (
    <Context.Provider value={{ skillSort, setSkills }}>
      <div className="app">
        <div className="app-wrapper">
          <Header />
          <Main />
        </div>
      </div>
    </Context.Provider>
  );
}

export default App;
