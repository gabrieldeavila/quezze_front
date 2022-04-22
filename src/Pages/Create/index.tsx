import React from "react";
import { useTranslation } from "react-i18next";
import { H1Dark, H1Light } from "../../assets/styled/base";

export default function Create() {
  const { t } = useTranslation();

  return <H1Light>{t("create.title")}</H1Light>;
}
