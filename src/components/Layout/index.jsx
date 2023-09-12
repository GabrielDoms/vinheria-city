import { Outlet } from "react-router-dom";
import "./styles.css";
import { Footer } from "../Footer";
import { Nav } from "../Nav";

export function Layout() {
  return (
    <div className="layout">
      <Nav />

      <Outlet />

      <Footer />
    </div>
  );
}
