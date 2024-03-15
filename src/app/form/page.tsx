import FormComponent from "@/components/Form/form";
import FormComponentAsync from "@/components/Form/form-async";
import Spinner from "@/components/Layout/spinner";
import { Suspense } from "react";

type Props = {};

export default async function FormPage({}: Props) {
  return (
    <main className="background min-h-[100dvh] h-full flex flex-col items-center justify-center">
      {/* <Suspense fallback={<Spinner />}>
        <FormComponentAsync />
      </Suspense> */}
      <FormComponent />
    </main>
  );
}
