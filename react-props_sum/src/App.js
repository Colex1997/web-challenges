import React from "react";
import "./styles.css";

export default function App() {
  return <Sum valueA="4" valueB="4" />;
}

function Sum({ valueA, valueB }) {
  return (
    <h1>
      {valueA} + {valueB} = {parseInt(valueA) + parseInt(valueB)}
    </h1>
  );
}
