import React from "react";
import Logo from "./Logo";
import Socials from "./Socials";

export default function Footer() {
  return (
    <footer className="py-2 flex items-center justify-between container">
      <Logo />
      <Socials />
    </footer>
  );
}
