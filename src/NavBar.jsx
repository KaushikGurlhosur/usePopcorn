/* eslint-disable react/prop-types */
// import { useState } from "react";
import Search from "./Search";
import Logo from "./Logo";

function NavBar({ children, onSetQuery, query }) {
  // const [query, setQuery] = useState("");

  return (
    <nav className="nav-bar">
      <Logo />
      <Search query={query} onSetQuery={onSetQuery} />
      {children}
    </nav>
  );
}

export default NavBar;
