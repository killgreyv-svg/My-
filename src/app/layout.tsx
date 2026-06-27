import type { Metadata } from "next";
import { Yeseva_One, Literata } from "next/font/google";
import "./globals.css";

const yesevaOne = Yeseva_One({
  variable: "--font-logo",
  weight: "400",
  subsets: ["latin", "cyrillic"],
});

const literata = Literata({
  variable: "--font-body",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "Кобзар — Всеукраїнська кухня",
  description:
    "Кобзар — заклад всеукраїнської кухні. Обирайте регіон на мапі України та відкривайте автентичне меню кожного краю.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="uk"
      className={`${yesevaOne.variable} ${literata.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-ink font-body">
        {children}
      </body>
    </html>
  );
}
