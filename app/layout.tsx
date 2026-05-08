import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import ScrollReveal from "./components/ScrollReveal";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fundación Manos que Ayudan",
  description:
    "Organización sin fines de lucro dedicada a mejorar la calidad de vida de comunidades vulnerables.",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${nunito.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <ScrollReveal />
        {children}
      </body>
    </html>
  );
}
