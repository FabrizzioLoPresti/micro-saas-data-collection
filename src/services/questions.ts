import { QuestionType } from "@/types/types";

export const getAllQuestions = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/data.json`);
  const {questions}: {questions: QuestionType[]} = await res.json();
  return questions;
}