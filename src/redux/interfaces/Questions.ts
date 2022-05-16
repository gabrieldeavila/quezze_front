export interface OptionInterface {
  label: string;
  selected: boolean;
}

export interface QuestionInterface {
  title: String;
  options: OptionInterface[];
  time: Number;
  image?: File;
  id: String;
}

export interface setQuestionInterface {
  questions: QuestionInterface[];
  question: QuestionInterface;
}
