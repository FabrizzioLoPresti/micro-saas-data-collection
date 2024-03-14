import FormComponent from "./form";

type Props = {};

const getQuestions = async () => {
  // Responder con 3 segundos de delay
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/data.json`);
  const { questions } = await response.json();
  return questions;
};

const FormComponentAsync = async (props: Props) => {
  const questionsApi = await getQuestions();
  return <FormComponent />;
};

export default FormComponentAsync;
