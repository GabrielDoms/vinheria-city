import { Link } from "react-router-dom";
import "./styles.css";

export function Nav() {
  return (
    <div className="nav">
      <Link to="/">Home</Link>
      <Link to="/produtos">Produtos</Link>
      <Link to="/sobre">Sobre</Link>
    </div>
  );
}
