import Image from "next/image";
import Link from "next/link";

type Props = {};

const Hero = (props: Props) => {
  return (
    <section className="relative min-h-[100dvh] h-full flex items-center justify-center">
      <div className="w-4/5 md:w-2/5 lg:w-3/5 flex flex-col gap-y-4 items-center justify-center">
        <h2 className="text-4xl lg:text-5xl xl:text-6xl font-semibold text-center md:text-left mb-6">
          Sé parte del <span className="font-bold text-blue-800">cambio</span>.
        </h2>
        <p className="text-center md:text-left">
          Completa nuestro formulario y contribuye al desarrollo de soluciones
          innovadoras y adaptadas a tus necesidades. ¡Ayúdanos a crear los
          futuros servicios que necesitas! Tu opinión es clave para nuestro
          proceso de creación.
        </p>

        <Link
          href="/form"
          className="mt-2 bg-blue-800 text-white px-4 py-2 rounded-md hover:bg-blue-900 transition-colors ease-in-out duration-300 w-full md:w-auto text-center self-start lg:self-center"
        >
          Comparte tus ideas
        </Link>
      </div>
      <Image
        src="/down-arrow.svg"
        width={50}
        height={50}
        alt="Down Arrow"
        className="animate-bounce absolute bottom-20"
      />
    </section>
  );
};

export default Hero;
