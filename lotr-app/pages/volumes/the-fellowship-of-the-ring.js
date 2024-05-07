import { volumes } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";

export default function TheFellowShip() {
  const currentVolume = volumes.find(
    ({ slug }) => slug === "the-fellowship-of-the-ring"
  );
  return (
    <>
      <Link href="../volumes">All Volumes</Link>
      <h1>{currentVolume.title}</h1>
      <p>{currentVolume.description}</p>
      <ul>
        {currentVolume.books.map((book) => {
          return (
            <>
              <li>
                {book.ordinal}, {book.title}
              </li>
            </>
          );
        })}
      </ul>
      <Image
        src="/../public/images/the-fellowship-of-the-ring.png"
        alt="A cool picture"
        height={230}
        width={140}
      />
      <br />
      <Link href="the-two-towers">Next Volume</Link>
      <br />
      <Link href="">Previous Volume</Link>
    </>
  );
}
