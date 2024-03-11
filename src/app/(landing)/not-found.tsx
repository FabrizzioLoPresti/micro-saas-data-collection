import Link from "next/link";

type Props = {};

export default function NotFoundPage({}: Props) {
  return (
    <section className="background min-h-[100dvh] h-full flex flex-col items-center justify-center gap-y-12">
      <h4 className="text-4xl font-bold">Error 404 - Página no encontrada</h4>
      <Link href="/" className="text-blue-800 font-bold">
        Volver al inicio
      </Link>
    </section>
  );
}
