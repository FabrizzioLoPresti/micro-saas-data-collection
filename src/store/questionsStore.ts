import { create } from "zustand";
import { type QuestionType } from "@/types/types";

type Store = {
  
}

export const useQuestionsStore = create<Store>((set, get) => ({
  
}));

/* 
  !TODO:
  !1- Fetch de questions en page de Form y pasar por Props
  !2- Funcion de fetchQuestions, nextQuestion, prevQuestion, answerSelected de cada pregunta
  !3- StructuredClone -> 51:20
  !4- Agregar a cada opcion una identificacion clara y unica para poder hacer el match con el id de la pregunta
*/