import Link from "next/link";
import { volumes } from "@/lib/data";
import Image from "next/image";
import { useRouter } from "next/router";

export default function VolumeDetail() {
  const router = useRouter();
  const { slug } = router.query;
  const currentIndex = volumes.findIndex((b) => b.slug === slug);
  const isFirst = currentIndex === 0;
  const isLast = currentIndex === volumes.length - 1;
  const prevIndex = isFirst ? volumes.length - 1 : currentIndex - 1;
  const nextIndex = isLast ? 0 : currentIndex + 1;

  const currentVolume = volumes.find((volume) => volume.slug === slug);

  if (!currentVolume) {
    return;
  }

  return (
    <>
      <Link href="/volumes">All Volumes</Link>
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
        src="/images/the-two-towers.png"
        alt="A cool picture"
        height={230}
        width={140}
      />
      <br />
      {!isLast && (
        <Link href={`/volumes/${volumes[nextIndex].slug}`}>Next Volume</Link>
      )}

      <br />
      {!isFirst && (
        <Link href={`/volumes/${volumes[prevIndex].slug}`}>
          Previous Volume
        </Link>
      )}
    </>
  );
}
