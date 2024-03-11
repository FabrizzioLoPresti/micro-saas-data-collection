import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Footer from "@/components/Layout/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "¿Cuál es tu siguiente Proyecto? - Clarifica tus ideas",
  description:
    "¡Comparte tus ideas y ayúdanos a crear los futuros servicios SaaS que necesitas! Completa nuestro formulario y haz que tu voz sea escuchada en el desarrollo de soluciones innovadoras y adaptadas a tus necesidades. Tu contribución es clave para nuestro proceso de creación. ¡Únete y sé parte del cambio!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
