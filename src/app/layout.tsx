import type { Metadata } from "next";
import { OctocatGithub } from "./components/OctocatGithub";
import "./globals.css";

export const metadata: Metadata = {
  title: "Programming Language Selector",
  description: "Programming language selection evaluation and ranking tool",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/water.css@2/out/dark.css"
        ></link>
      </head>
      <body>
        <OctocatGithub />
        {children}
      </body>
    </html>
  );
}
