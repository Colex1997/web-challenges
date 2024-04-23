import React from "react";
import "./styles.css";

export default function App() {
  const happy = true;
  return (
    <h1>
      <Smiley isHappy={happy} />
    </h1>
  );
}

function Smiley({ isHappy }) {
  return <div>{isHappy ? ":)" : ":("}</div>;
}
