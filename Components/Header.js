import React from "react";

import Link from "next/link";

const Header = (props) => {
  return (
    <header className="flex">
      <h2>Logo</h2>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/About">About</Link>
        <Link href="/Career">Career</Link>
        <Link href="/Help">Help</Link>
      </nav>
    </header>
  );
};

export default Header;
