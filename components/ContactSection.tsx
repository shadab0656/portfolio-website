"use client";

import React, { useState } from "react";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { HiOutlineMail, HiOutlinePhone, HiOutlineClipboardCopy, HiCheck } from "react-icons/hi";
import { profile } from "@/lib/data";

const ContactSection = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard API unavailable — the email link below still works
    }
  };

  return (
    <section id="contact" className="border-y border-line bg-panel">
      <div className="mx-auto max-w-content px-6 py-20 md:py-28">
        <h2 className="font-display text-3xl text-paper md:text-5xl">
          Let&apos;s build something worth measuring.
        </h2>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg">
          I&apos;m open to frontend and full-stack roles, especially where
          performance and React/Next.js expertise are the priority. Email is
          the fastest way to reach me.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Link
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-md bg-amber px-6 py-3 font-medium text-ink transition-colors hover:bg-amber/90"
          >
            <HiOutlineMail size={20} />
            {profile.email}
          </Link>
          <button
            onClick={handleCopy}
            aria-label="Copy email address"
            className="inline-flex items-center gap-2 rounded-md border border-line px-4 py-3 text-sm text-muted transition-colors hover:border-teal hover:text-teal"
          >
            {copied ? (
              <>
                <HiCheck size={18} /> Copied
              </>
            ) : (
              <>
                <HiOutlineClipboardCopy size={18} /> Copy
              </>
            )}
          </button>
        </div>

        <a
          href={`tel:${profile.phone.replace(/\s/g, "")}`}
          className="mt-4 inline-flex w-fit items-center gap-2 font-mono text-sm text-muted transition-colors hover:text-paper"
        >
          <HiOutlinePhone size={18} />
          {profile.phone}
        </a>

        <div className="mt-10 flex gap-6 border-t border-line pt-8">
          <Link
            href={profile.github}
            target="_blank"
            aria-label="GitHub"
            className="text-muted transition-colors hover:text-paper"
          >
            <BsGithub size={22} />
          </Link>
          <Link
            href={profile.linkedin}
            target="_blank"
            aria-label="LinkedIn"
            className="text-muted transition-colors hover:text-paper"
          >
            <BsLinkedin size={22} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
