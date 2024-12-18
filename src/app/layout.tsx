import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import {GameContextProvider} from "@/app/_contextProviders/GameContextProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const bebasNeue = localFont({
  src: "./fonts/BebasNeue-Regular.ttf",
  variable: "--font-bebas-neue",
  weight: "400",
});
const kabelUltra = localFont({
  src: "./fonts/Kabel-Ultra.ttf",
  variable: "--font-kabel-ultra",
  weight: "400",
});

export const metadata: Metadata = {
  title: "MySims Guide",
  description: "Essences | Sims",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${kabelUltra.variable} ${bebasNeue.variable} antialiased`}
      >
      <GameContextProvider>
        {children}
      </GameContextProvider>
      </body>
    </html>
  );
}
