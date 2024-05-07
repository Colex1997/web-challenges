import Link from "next/link";
import { volumes } from "@/lib/data";
import Image from "next/image";

export default function TheTwoTowers() {
  const currentVolume = volumes.find(({ slug }) => slug === "the-two-towers");
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
        src="/../public/images/the-two-towers.png"
        alt="A cool picture"
        height={230}
        width={140}
      />
      <br />
      <Link href="the-return-of-the-king">Next Volume</Link>
      <br />
      <Link href="the-fellowship-of-the-ring">Previous Volume</Link>
    </>
  );
}
