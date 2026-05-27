import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Carlos Valencia Durán — Periodista & Director de Medios Digitales",
  description:
    "Portafolio de Carlos Valencia Durán. Periodista, fundador de Acontecer.co.cr, consultor en comunicación estratégica y media tech.",
  openGraph: {
    title: "Carlos Valencia Durán — Periodista & Director de Medios Digitales",
    description:
      "Portafolio profesional. Premio Alberto Martén Chavarría 2023. Fundador de Acontecer.co.cr.",
    locale: "es_CR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wdth,wght@12..96,75..100,200..800&family=Space+Grotesk:wght@300..700&family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&family=Newsreader:ital,opsz,wght@0,6..72,200..800;1,6..72,200..800&family=Manrope:wght@200..800&family=DM+Serif+Display:ital@0;1&family=Big+Shoulders+Display:opsz,wght@10..72,100..900&family=IBM+Plex+Sans:ital,wght@0,100..700;1,100..700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
