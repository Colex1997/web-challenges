import Link from "next/link";
import { volumes } from "@/lib/data";
import Image from "next/image";

export default function TheReturn() {
  const currentVolume = volumes.find(
    ({ slug }) => slug === "the-return-of-the-king"
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
        src="/../public/images/the-return-of-the-king.png"
        alt="A cool picture"
        height={230}
        width={140}
      />
      <br />
      <Link href="">Next Volume</Link>
      <br />
      <Link href="the-two-towers">Previous Volume</Link>
    </>
  );
}
