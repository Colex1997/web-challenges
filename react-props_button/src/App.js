import React from "react";
import "./styles.css";

export default function App() {
  const clickAaBoo = () => {
    console.log("Button clicked");
    return alert("i didnt give you my consent bruh");
  };

  return (
    <h1>
      <Button
        color={"blue"}
        disabled="false"
        text="Oh mon dieu!"
        clickediClick={clickAaBoo}
      />
    </h1>
  );
}

function Button({ color, disabled, text, clickediClick }) {
  return (
    <>
      <button
        style={{ color: color }}
        disabled={disabled}
        onClick={clickediClick}
      >
        {text}
      </button>
    </>
  );
}
