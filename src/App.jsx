import { useState } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

import UserContext from "./context/UserContext";

function App() {
  const [skills, setSkills] = useState([
    { name: "Ruby", exp: 2 },
    { name: "PHP", exp: 6 },
    { name: "JavaScript", exp: 4 },
  ]);

  const skillsSort = skills.sort((a, b) => (a.exp > b.exp ? -1 : 1));

  return (
    <UserContext.Provider value={{ skillsSort, setSkills, skills }}>
      <div className="app">
        <div className="app-wrapper">
          <Header />
          <Main />
        </div>
      </div>
    </UserContext.Provider>
  );
}

export default App;
