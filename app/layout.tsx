import { fraunces, inter, jetbrainsMono } from "@/lib/fonts";
//@ts-ignore
import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://shadabhussain.vercel.app/"),
  title: "Shadab Hussain — Frontend Engineer",
  description:
    "Frontend engineer specializing in React.js and Next.js, with full-stack MERN range and a focus on Core Web Vitals and production performance.",
  openGraph: {
    title: "Shadab Hussain — Frontend Engineer",
    description:
      "React.js & Next.js specialist. 3+ years shipping production apps, Lighthouse 90+, and full-stack (MERN) range.",
    url: "https://shadabhussain.vercel.app/",
    siteName: "Shadab Hussain",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shadab Hussain — Frontend Engineer",
    description:
      "React.js & Next.js specialist. 3+ years shipping production apps, Lighthouse 90+, and full-stack (MERN) range.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${fraunces.variable} ${inter.variable} ${jetbrainsMono.variable} font-sans bg-ink text-paper antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
