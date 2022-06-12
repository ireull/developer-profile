import { useState } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

import Context from "./context/context";

function App() {
  const [skills, setSkills] = useState([
    { name: "PHP", exp: 2 },
    { name: "Ruby", exp: 4 },
    { name: "JavaScript", exp: 4 },
  ]);

  return (
    <Context.Provider value={{ skills, setSkills }}>
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
