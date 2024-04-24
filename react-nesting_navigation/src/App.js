import "./styles.css";

import avatar from "./img/avatar.jpg";
import { Header } from "./components/Header";
import { Navigation } from "./components/Navigation";
import { Link } from "./components/Link";
import { Image } from "./components/Image";
import { Logo } from "./components/Logo";
import { Avatar } from "./components/Avatar";

export default function App() {
  return (
    <>
      <Header>
        <Link>
          <Logo />
        </Link>
        <Navigation>
          <Link>Home</Link>
          <Link>About</Link>
          <Link>Impressum</Link>
        </Navigation>
        <Avatar />
      </Header>
      <main>content goes here…</main>
    </>
  );
}
