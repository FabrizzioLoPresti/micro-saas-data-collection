import Spinner from "@/components/Layout/spinner";

type Props = {};

export default function LoadingPage({}: Props) {
  return (
    <section className="min-h-[100dvh] h-full flex items-center justify-center">
      <Spinner />
    </section>
  );
}
