import { useRef, useState } from "react";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

import UserContext from "./context/UserContext";
import { useLocalStorage } from "./hooks/useLocalStorage";

function App() {
  const [skills, setSkills] = useLocalStorage(
    [
      { name: "Ruby", exp: 2 },
      { name: "PHP", exp: 6 },
      { name: "JavaScript", exp: 4 },
    ],
    "user-skills"
  );

  const [latitude, setLatitude] = useLocalStorage(
    "Portland, Oregon, USA",
    "use-lnt"
  );
  const [longitude, setLongitude] = useLocalStorage(
    "Portland, Oregon, USA",
    "user-lng"
  );
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
