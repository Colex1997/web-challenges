import "./Tag.css";

export default function Tag({ tag }) {
  const highlight = `tag ${tag === "admin" ? "tag--highlight" : ""}`;
  return <li className={highlight}>{tag}</li>;
}
