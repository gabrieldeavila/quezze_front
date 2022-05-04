import { t } from "i18next";
import { TranslateSelectOptionsProps } from "../../interfaces";

export const translateSelect = (
  translate: TranslateSelectOptionsProps,
  path: string
) => {
  const { options } = translate;

  return options.map((option) => {
    const { value, label } = option;
    const newLabel = t(`${path}.${label}`);

    return { value, label: newLabel };
  });
};
