import FormComponent from "@/components/Form/form";
import FormComponentAsync from "@/components/Form/form-async";
import Spinner from "@/components/Layout/spinner";
import { Suspense } from "react";

type Props = {};

export default async function FormPage({}: Props) {
  return (
    <main className="background min-h-[100dvh] h-full flex flex-col items-center justify-center">
      <Suspense fallback={<Spinner />}>
        <FormComponentAsync />
      </Suspense>
    </main>
  );
}

// https://react.dev/reference/react/Suspense - https://react.dev/reference/react/lazy - https://react.dev/reference/react/useOptimistic - https://react.dev/learn/reusing-logic-with-custom-hooks
// !4. LocalStorage almacenar valor seleccionado del indice de la respuesta -> si funciona pero el llamado a la api me refresca sel setQuestions, Midulive no tenia este probema pq la llamada se hacia por un boton
// !5. Redux DevTools nombrar acciones y testing con Cypress
