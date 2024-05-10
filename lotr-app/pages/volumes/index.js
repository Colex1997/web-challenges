import Link from "next/link";
import { introduction } from "@/lib/data";
import { volumes } from "@/lib/data";

export default function Volumes() {
  return (
    <>
      <h1>Lord Of the Rings</h1>
      <p>{introduction}</p>
      <h2>All Volumes</h2>
      <ul>
        {volumes.map((volume) => {
          return (
            <>
              <li key={volume.slug}>
                {" "}
                {volume.title}
                <br />
                <Link href={`/volumes/${volume.slug}`}>Detailspage</Link>
              </li>
            </>
          );
        })}
      </ul>
    </>
  );
}
