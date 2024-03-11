import FormComponent from "@/components/Form/form";

type Props = {};

export default function FormPage({}: Props) {
  return (
    <main className="background min-h-[100dvh] h-full flex flex-col items-center justify-center">
      <FormComponent />
    </main>
  );
}
