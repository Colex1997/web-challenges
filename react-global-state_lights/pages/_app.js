import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";

const initLights = [
  { name: "Living Room", isOn: false, id: 1 },
  { name: "Kitchen", isOn: false, id: 2 },
  { name: "Bedroom", isOn: false, id: 3 },
  { name: "Bathroom", isOn: false, id: 4 },
  { name: "Garage", isOn: false, id: 5 },
  { name: "Porch", isOn: false, id: 6 },
  { name: "Garden", isOn: false, id: 7 },
  { name: "Office", isOn: false, id: 8 },
];

export default function App({ Component, pageProps }) {
  const [count, setCount] = useState(0);
  const [lights, setLights] = useState(initLights);

  function handleLights(id) {
    console.log(id);
    setLights((prevLights) =>
      prevLights.map((light) =>
        light.id === id ? { ...light, isOn: !light.isOn } : light
      )
    );
    setCount(handleCount);
  }

  function handleCount() {
    return lights.reduce((x, light) => {
      if (light.isOn) {
        return x + 1;
      } else {
        return x;
      }
    }, 0);
  }

  return (
    <Layout>
      <GlobalStyle />
      <Component
        {...pageProps}
        onHandleLights={handleLights}
        count={count}
        lights={lights}
      />
    </Layout>
  );
}
