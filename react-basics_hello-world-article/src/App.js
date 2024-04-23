import React from "react";
import "./styles.css";

export default function App() {
  return <HelloWorldArticle />;
}

export function HelloWorldArticle() {
  return (
    <article>
      <h1>Brötchen</h1>
      <p>Dinkel an die Macht, Weizen ist Teufelswerk</p>
    </article>
  );
}
