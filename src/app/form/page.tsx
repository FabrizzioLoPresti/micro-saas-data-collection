import FormComponent from "@/components/Form/form";
import Spinner from "@/components/Layout/spinner";
import { Suspense } from "react";

type Props = {};

export default async function FormPage({}: Props) {
  return (
    <main className="background min-h-[100dvh] h-full flex flex-col items-center justify-center">
      <Suspense fallback={<Spinner />}>
        <FormComponent />
      </Suspense>
    </main>
  );
}

// !1. Utilizar aqui Suspense y Lazy en el Componente de Form para esperar y mostrar Spinner
// !2. Consultar API desde la Pagina con Next.js aqui y enviar datos al Componente de Formulario
// !3. Tener un Componente Server Side para hacer la consulta y que funcione el Suspense desde aqui
// https://react.dev/reference/react/Suspense - https://react.dev/reference/react/lazy - https://react.dev/reference/react/useOptimistic - https://react.dev/learn/reusing-logic-with-custom-hooks
// !4. LocalStorage almacenar valor seleccionado del indice de la respuesta
// !5. Redux DevTools nombrar acciones y testing con Cypress
