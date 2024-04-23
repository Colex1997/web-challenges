import "./styles.css";

export default function App() {
  return <Greeting gulasch="Domi" />;
}

function Greeting({ gulasch }) {
  if (gulasch == "Domi") {
    return <h1>Hello, {gulasch}</h1>;
  } else {
    <></>;
  }
}
