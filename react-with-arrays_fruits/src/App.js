import Card from "./components/Card";

export default function App() {
  const fruits = [
    {
      id: 1,
      name: "🍌 Banana",
      color: "yellow",
    },
    {
      id: 2,
      name: "Apple",
      color: "green",
    },
    {
      id: 3,
      name: "Strawberry",
      color: "red",
    },
    {
      id: 4,
      name: "Lemon",
      color: "green",
    },
    {
      id: 5,
      name: "Mango",
      color: "orange",
    },
  ];

  return (
    <div className="app">
      {fruits.map((fruit) => {
        return <Card key={fruit.id} name={fruit.name} color={fruit.color} />;
      })}
    </div>
  );
}
