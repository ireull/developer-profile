import React, { useContext, useEffect } from "react";
import GoogleMapReact from "google-map-react";

import UserContext from "../../context/UserContext";

import Marker from "../Marker/Marker";

import styles from "./Map.module.scss";

const Map = () => {
  const { latitude, longitude, isFetching } = useContext(UserContext);

  return (
    <div className={styles.map}>
      <div className={styles.wrappMap}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyB64BTq9-MAtCEYQSYqxGs1dsqH5oJgxH4" }}
          defaultZoom={8}
          center={{ lat: latitude, lng: longitude }}
        >
          {isFetching && <Marker lat={latitude} lng={longitude} />}
        </GoogleMapReact>
      </div>
    </div>
  );
};

export default Map;
