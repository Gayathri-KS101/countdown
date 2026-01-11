import type { Metadata } from "next";
import "./globals.css";


// const urbanist = Urbanist({
//   variable: "--font-urbanist",
//   weight: "800"
// })

export const metadata: Metadata = {
  title: "Invento Countdown",
  description: "Countdown to Invento 2026",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
