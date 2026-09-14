import React from "react";
import { profile } from "@/lib/data";

const Footer = () => {
  return (
    <footer className="border-t border-line bg-ink">
      <p className="mx-auto max-w-content px-6 py-8 text-center text-xs text-muted/70">
        {profile.name} — built with Next.js & Tailwind CSS
      </p>
    </footer>
  );
};

export default Footer;
