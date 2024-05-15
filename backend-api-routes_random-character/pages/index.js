import useSWR from "swr";

export default function HomePage() {
  const { data, isLoading } = useSWR("/api/random-character");

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

  return (
    <p>
      My name is {data.name}, i am {data.age} years old and i work as a {""}
      {data.profession}. More importantly though is probably my twitter name:{" "}
      {data.twitterName} and my geohash: {data.geohash}.
    </p>
  );
}
