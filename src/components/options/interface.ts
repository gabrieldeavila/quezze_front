import {
  OptionInterface,
  QuestionInterface,
} from "./../../redux/interfaces/Questions";

export interface OptionsProps {
  optionsField: boolean;
  name: string;
  data: QuestionInterface;
  onChange?: (x: object, y: number) => void;
}

export interface OptionProps {
  onChange?: (x: object, y: number) => void;
  option: OptionInterface;
  index: number;
}
