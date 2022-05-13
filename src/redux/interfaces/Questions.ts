interface OptionsProps {
  name: string;
  rightAnswer: boolean;
}

export interface QuestionInterface {
  title: String;
  options: OptionsProps[]; //OptionsProps[][5] tentar depois p/ limitar
  time: Number;
  image?: File;
  id: String;
}

export interface setQuestionInterface {
  questions: QuestionInterface[];
  question: QuestionInterface;
}
