import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <h1>Dynamic Routes</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contacts">Contacts</Link>
      </nav>
    </header>
  );
}
