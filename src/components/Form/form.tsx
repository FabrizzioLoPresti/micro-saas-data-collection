"use client";

import { useEffect } from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { ChevronRightIcon, ChevronLeftIcon } from "@radix-ui/react-icons";
import { useQuestionsStore } from "@/store/questionsStore";
import Spinner from "../Layout/spinner";
import { QuestionType } from "@/types/types";

type Props = {};

const Question = ({ questionInfo }: { questionInfo: QuestionType }) => {
  const selectAnswer = useQuestionsStore((state) => state.selectAnswer);

  const handleSelectAnswer = (answerIndex: number) => () => {
    selectAnswer(questionInfo.id, answerIndex);
  };

  return (
    <div className="space-y-8">
      <h4 className="text-blue-800 font-bold text-2xl text-center">
        {questionInfo.question}
      </h4>

      <div>
        <RadioGroup>
          <ul className="[&>li]:border-t-2 [&>li:nth-child(odd)]:border-t-blue-800 [&>li:nth-child(even)]:border-t-blue-200">
            {questionInfo.options.map((option, index) => (
              <li
                className="py-3 px-6 flex items-center gap-x-2"
                key={index}
                onClick={handleSelectAnswer(index)}
              >
                <RadioGroupItem
                  value={index.toString()}
                  id={index.toString()}
                  checked={questionInfo.answerSelected === index}
                />
                <Label htmlFor={index.toString()}>{option}</Label>
              </li>
            ))}
          </ul>
        </RadioGroup>
      </div>
    </div>
  );
};

const FormComponent = () => {
  const fetchQuestions = useQuestionsStore((state) => state.fetchQuestions);
  const questions = useQuestionsStore((state) => state.questions);
  const currentQuestion = useQuestionsStore((state) => state.currentQuestion);
  const nextQuestion = useQuestionsStore((state) => state.nextQuestion);
  const prevQuestion = useQuestionsStore((state) => state.prevQuestion);

  useEffect(() => {
    fetchQuestions();
  }, []);

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
