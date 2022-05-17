import {
  OptionInterface,
  QuestionInterface,
} from "./../../redux/interfaces/Questions";

export interface OptionsProps {
  optionsField: boolean;
  name: string;
  data: QuestionInterface;
  onChange?: (x: object, y: number, z: OptionInterface[]) => void;
}

export interface OptionProps {
  options: OptionInterface[];
  onChange?: (x: object, y: number, z: OptionInterface[]) => void;
  option: OptionInterface;
  index: number;
}
