import { useRef, useState } from "react";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

import UserContext from "./context/UserContext";

function App() {
  const [skills, setSkills] = useState([
    { name: "Ruby", exp: 2 },
    { name: "PHP", exp: 6 },
    { name: "JavaScript", exp: 4 },
  ]);

  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();
  const [isFetching, setIsFetching] = useState(false);

  const pdfRef = useRef(null);

  const skillsSort = skills.sort((a, b) => (a.exp > b.exp ? -1 : 1));

  return (
    <UserContext.Provider
      value={{
        skillsSort,
        setSkills,
        skills,
        pdfRef,
        setLatitude,
        setLongitude,
        latitude,
        longitude,
        isFetching,
        setIsFetching,
      }}
    >
      <div className="app">
        <div className="app-wrapper" ref={pdfRef}>
          <Header />
          <Main />
        </div>
      </div>
    </UserContext.Provider>
  );
}

export default App;
