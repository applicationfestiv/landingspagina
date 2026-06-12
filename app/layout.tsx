import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Festiv — Vind je match op het festival",
  description: "Festiv is de dating app voor festival lovers. Swipe mensen die naar dezelfde evenementen gaan als jij.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl">
      <body>{children}</body>
    </html>
  );
}
