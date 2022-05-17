import { QuestionInterface } from "./../../redux/interfaces/Questions";

export interface QuestionProps {
  data: QuestionInterface;
  last: boolean;
  position: number;
}
