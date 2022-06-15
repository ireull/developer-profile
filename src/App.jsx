import { useRef, useState } from "react";
import { useLocalStorage } from "./hooks/useLocalStorage";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

import UserContext from "./context/UserContext";
import { DeveloperData } from "./data/data.ts";

function App() {
  const { locationMap } = DeveloperData;
  const [skills, setSkills] = useLocalStorage(
    DeveloperData.skills,
    "user-skills"
  );
  const [latitude, setLatitude] = useLocalStorage(locationMap.lat, "use-lnt");
  const [longitude, setLongitude] = useLocalStorage(
    locationMap.lng,
    "user-lng"
  );
  const [isFetching, setIsFetching] = useState(false);

  const pdfRef = useRef(null);

  const compare = (a, b) => {
    if (a < b) {
      return 1;
    }
    if (a > b) {
      return -1;
    }
    return 0;
  };

  const skillsSort = skills.sort((a, b) =>
    compare(Number(a.exp), Number(b.exp))
  );

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
