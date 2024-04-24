import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>Oh</Button>
      <Button>mon</Button>
      <Button>dieu</Button>
      <Button>!</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
