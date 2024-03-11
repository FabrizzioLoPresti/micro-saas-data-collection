import type { Metadata } from "next";
import "../globals.css";

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
    <main className="background min-h-[100dvh] h-full flex flex-col items-center justify-center">
      {children}
    </main>
  );
}
