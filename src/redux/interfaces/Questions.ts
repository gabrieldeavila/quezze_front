interface OptionsProps {
  name: string;
  rightAnswer: boolean;
}

export interface QuestionInterface {
  questionTitle: String;
  options: OptionsProps[]; //OptionsProps[][5] tentar depois p/ limitar
  time: Number;
  image?: File;
}
