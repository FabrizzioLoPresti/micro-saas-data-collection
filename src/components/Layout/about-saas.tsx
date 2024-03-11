import Image from "next/image";

type Props = {};

const AboutSaaS = (props: Props) => {
  return (
    <section className="w-4/5 md:w-2/5 lg:w-3/5 mx-auto grid lg:grid-cols-3 gap-y-8 lg:gap-y-16 gap-x-12 py-12 items-center">
      <div className="lg:col-start-1 lg:col-end-3">
        <h3 className="text-2xl lg:text-3xl xl:text-4xl font-semibold mb-2 xl:mb-4">
          ¿Qué es un <span className="font-bold text-blue-800">SaaS</span>?
        </h3>
        <p className="text-sm lg:text-base font-light">
          SaaS (Software as a Service) es un modelo de distribución de software
          donde el software se aloja en un servidor en la nube y se puede
          acceder a él a través de internet. Este modelo de distribución de
          software elimina la necesidad de instalar y ejecutar aplicaciones en
          las computadoras locales de los usuarios, permitiendo acceder a la
          aplicación a través de un navegador web, lo que las hace accesibles
          desde cualquier dispositivo con conexión a internet.
        </p>
      </div>

      <div className="hidden lg:block lg:col-start-3 lg:col-end-4">
        <Image
          src="/img/saas.png"
          width={300}
          height={300}
          alt="SaaS"
          className="rounded-md transform hover:scale-110 transition-transform ease-in-out duration-300"
        />
      </div>

      <div className="lg:col-start-2 lg:col-end-4 lg:text-right">
        <h3 className="text-2xl lg:text-3xl xl:text-4xl font-semibold mb-2 xl:mb-4">
          Por <span className="font-bold text-blue-800">Ejemplo</span>...
        </h3>
        <p className="text-sm lg:text-base font-light">
          Algunos ejemplos de aplicaciones SaaS incluyen Google Workspace,
          Microsoft 365, Salesforce, DocuSign, Mailchimp, Slack, HubSpot, Zoom,
          y muchos otros. Estas aplicaciones SaaS son utilizadas por empresas de
          todos los tamaños y en todas las industrias para mejorar la
          productividad, colaboración, y automatización de procesos.
        </p>
      </div>

      <div className="lg:col-start-1 lg:col-end-3">
        <h3 className="text-2xl lg:text-3xl xl:text-4xl font-semibold mb-2 xl:mb-4">
          ¿Qué es un <span className="font-bold text-blue-800">Micro-SaaS</span>
          ?
        </h3>

        <p className="text-sm lg:text-base font-light">
          Micro-SaaS es un modelo de negocio que se enfoca en la creación y
          distribución de aplicaciones SaaS de nicho. Estas aplicaciones SaaS de
          nicho están diseñadas para resolver problemas específicos de un
          mercado o industria
        </p>
      </div>

      <div className="hidden lg:block lg:col-start-3 lg:col-end-4">
        <Image
          src="/img/micro-saas.png"
          width={300}
          height={300}
          alt="SaaS"
          className="rounded-md transform hover:scale-110 transition-transform ease-in-out duration-300"
        />
      </div>

      <div className="lg:col-start-2 lg:col-end-4 lg:text-right">
        <h3 className="text-2xl lg:text-3xl xl:text-4xl font-semibold mb-2 xl:mb-4">
          Por <span className="font-bold text-blue-800">Ejemplo</span>...
        </h3>
        <p className="text-sm lg:text-base font-light">
          Algunos ejemplos de Micro-SaaS incluyen aplicaciones como Buffer
          (programación de redes sociales), Mailchimp (marketing por correo
          electrónico), y Zapier (automatización de tareas). Estas aplicaciones
          SaaS de nicho están diseñadas para resolver problemas específicos de
          un mercado o industria.
        </p>
      </div>
    </section>
  );
};

export default AboutSaaS;
