import React from "react";
import "./styles.css";

export default function App() {
  return <Article />;
}

export function Article() {
  return (
    <article className="article">
      <h2 className="article__title">Vampires or Werewolves?</h2>
      <label htmlFor="hdl">Dunno bout Vampires tho</label>
      <input type="text" id="hdl"></input>
      <a
        className="article__link"
        href="https://elderscrolls.fandom.com/de/wiki/Vampir_(Skyrim)"
      >
        Bloody Vampires
      </a>
    </article>
  );
}
