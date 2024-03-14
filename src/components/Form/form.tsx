"use client";

import { Suspense, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRightIcon, ChevronLeftIcon } from "@radix-ui/react-icons";
import { useQuestionsStore } from "@/store/questionsStore";
import Question from "./question";
import Spinner from "../Layout/spinner";
import { QuestionType } from "@/types/types";

type Props = {};

const FormComponent = ({ questionsApi }: { questionsApi: QuestionType[] }) => {
  const setQuestions = useQuestionsStore((state) => state.setQuestions);
  const questions = useQuestionsStore((state) => state.questions);

  const currentQuestion = useQuestionsStore((state) => state.currentQuestion);
  const nextQuestion = useQuestionsStore((state) => state.nextQuestion);
  const prevQuestion = useQuestionsStore((state) => state.prevQuestion);

  useEffect(() => {
    setQuestions(questionsApi);
  }, [questionsApi, setQuestions]);

  if (questions.length === 0) return <Spinner />;

  const questionInfo = questions[currentQuestion];

  return (
    <div className="max-w-[600px] max-h-[600px] p-8 border border-zinc-300 bg-neutral-50 shadow-2xl">
      <div className="flex flex-col items-center">
        <h3 className="text-xl font-bold text-blue-800 before:content-['-___'] after:content-['___-']">
          Pregunta
        </h3>
        <p>
          {currentQuestion + 1}{" "}
          <span className="font-bold text-blue-800">de</span> {questions.length}
        </p>
      </div>

      <div className="h-full">
        <div className="w-full my-6 flex flex-row items-center justify-between">
          <Button
            variant="outline"
            size="icon"
            onClick={prevQuestion}
            disabled={currentQuestion === 0}
          >
            <ChevronLeftIcon className="h-4 w-4" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            onClick={nextQuestion}
            disabled={currentQuestion === questions.length - 1}
          >
            <ChevronRightIcon className="h-4 w-4" />
          </Button>
        </div>

        <Question questionInfo={questionInfo} />
      </div>
    </div>
  );
};

export default FormComponent;
