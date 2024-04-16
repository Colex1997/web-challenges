import { Header } from "../Header/header.js";
import { Form } from "../Form/createForm.js";
import { CardList } from "../CardList/CardList.js";

export function App() {
  const app = document.createElement("main");
  app.classList.add("app");
  app.append(Header(), Form(), CardList());

  return app;
}

export function render() {
  const root = document.querySelector("#root");
  root.append(App());
}
