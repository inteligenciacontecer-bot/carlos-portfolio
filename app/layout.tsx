import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Carlos Valencia Durán — Periodista & Director de Medios Digitales",
  description: "Portafolio de Carlos Valencia Durán. Periodista, fundador de Acontecer.co.cr, consultor en comunicación estratégica y media tech.",
  openGraph: {
    title: "Carlos Valencia Durán — Periodista & Director de Medios Digitales",
    description: "Portafolio profesional. Premio Alberto Martén Chavarría 2023. Fundador de Acontecer.co.cr.",
    locale: "es_CR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
