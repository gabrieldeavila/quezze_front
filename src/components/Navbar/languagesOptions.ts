import i18n from "i18next";

export const languageOptions = [
  { value: "en", label: "English" },
  { value: "pt-BR", label: "Português - BR" },
];

export const handleLanguage = (value = "") => {
  const language = languageOptions.find((option) => option.value === value);

  if (language) {
    i18n.changeLanguage(language.value);
  }
};
