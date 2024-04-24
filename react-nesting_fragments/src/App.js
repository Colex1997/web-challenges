import React from "react";
import "./styles.css";
import Box from "./components/Box";

export default function App() {
  return (
    <main className="flex-container">
      <Boxes />
    </main>
  );
}

function Boxes({ color }) {
  return (
    <>
      <div className="box" style={{ backgroundColor: "blue" }}></div>
      <div className="box" style={{ backgroundColor: "green" }}></div>
      <div className="box" style={{ backgroundColor: "red" }}></div>
    </>
  );
}
