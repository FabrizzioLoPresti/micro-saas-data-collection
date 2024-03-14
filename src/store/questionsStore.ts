import { create } from "zustand";
import { type QuestionType } from "@/types/types";
import { questions as questionData } from "@/libs/data";
import { persist } from "zustand/middleware";
import { getAllQuestions } from "@/services/questions";

type Store = {
  questions: QuestionType[];
  currentQuestion: number;
  fetchQuestions: () => Promise<void>;
  setQuestions: (questions: QuestionType[]) => void;
  nextQuestion: () => void;
  prevQuestion: () => void;
  selectAnswer: (questionId: number, indexAnswer: number) => void;
}

export const useQuestionsStore = create<Store>()(persist((set, get) => ({
  questions: [],
  currentQuestion: 0,

  fetchQuestions: async () => {
    // Fetch de preguntas
    if(get().questions.length === 0) {
      const questions = await getAllQuestions();
      set({ questions });
    }
  },

  setQuestions: (questions) => {
    set({ questions });
  },
  nextQuestion: () => {
    // Logica para ir a la siguiente pregunta
    if (get().currentQuestion < get().questions.length - 1) {
      set({
        currentQuestion: get().currentQuestion + 1
      })
    }
  },
  prevQuestion: () => {
    // Logica para ir a la pregunta anterior
    if (get().currentQuestion > 0) {
      set({
        currentQuestion: get().currentQuestion - 1
      })
    }
  },
  selectAnswer: (questionId, indexAnswer) => {
    // Logica para seleccionar una respuesta -> StructuredClone para clonar objetos de forma profunda

    // Usar el StructuredClone para clonar el array de preguntas
    const newQuestions = structuredClone(get().questions);

    // Encontramos el indice de la pregunta que queremos modificar
    const questionIndex = newQuestions.findIndex((question) => question.id === questionId);

    // Obtenemos la informacion del pregunta que queremos modificar
    const questionInfo = newQuestions[questionIndex];

    // Cambiar informacion en la copia de la pregunta
    newQuestions[questionIndex] = {
      ...questionInfo,
      answerSelected: indexAnswer
    };

    // Actualizar el estado con las preguntas modificadas -> 1:02:04
    set({ questions: newQuestions });
  }
}), {
  name: "questions-store"
}));
