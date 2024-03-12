import FormComponent from "@/components/Form/form";
import { Suspense } from "react";

type Props = {};

export default async function FormPage({}: Props) {
  return (
    <main className="background min-h-[100dvh] h-full flex flex-col items-center justify-center">
      <Suspense fallback={<div>Loading...</div>}>
        <FormComponent />
      </Suspense>
    </main>
  );
}
