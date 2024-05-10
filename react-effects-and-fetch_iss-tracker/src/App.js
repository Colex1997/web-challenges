import { useEffect, useState } from "react";
import Controls from "./components/Controls";
import Map from "./components/Map";
import "./styles.css";

const URL = "https://api.wheretheiss.at/v1/satellites/25544";

let cleanup = 0;

export default function App() {
  const [coords, setCoords] = useState({
    longitude: 0,
    latitude: 0,
  });

  useEffect(() => {
    async function getISSCoords() {
      const response = await fetch(URL);
      const data = await response.json();
      setCoords({ longitude: data.longitude, latitude: data.latitude });
    }
    const intervID = setInterval(() => {
      getISSCoords;
    }, 3000);
    return () => {
      console.log(cleanup++);
      clearInterval(intervID);
    };
  }, []);

  return (
    <main>
      <Map longitude={coords.longitude} latitude={coords.latitude} />
      <Controls
        longitude={coords.longitude}
        latitude={coords.latitude}
        // onRefresh={getISSCoords}
      />
    </main>
  );
}
