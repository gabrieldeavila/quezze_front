import React, { useCallback } from "react";
import { H1Light } from "../../assets/styled/base";
import Form from "./../../components/Form/index";
import Select from "react-select";
import Drop from "./../../components/dropzone/index";
import { Button } from "./../../assets/styled/base";
import { translateSelect } from "../../components/Form/Fields/select/translateSelect";
import { ex } from "./data_example";
import { CreateInterface } from "./../../redux/interfaces/Create";
import { useDispatch, useSelector } from "react-redux";
import { setCreate } from "../../redux/effects/Create";
import { useTranslation } from "react-i18next";
import { BasicInfoProps } from "./interface";
import { AppState } from "../../redux/store";

function BasicInfo({ setShowQuestions }: BasicInfoProps) {
  const options = translateSelect({ options: ex }, "create.types");
  const create: CreateInterface = useSelector(
    (state: AppState) => state.create
  );

  const { t } = useTranslation();

  // prettier-ignore
  const handleSubmit = useCallback((values: CreateInterface) => {
    setShowQuestions(true);
  },[]);

  return (
    <>
      <H1Light>{t("create.title")}</H1Light>
      <Form
        action={setCreate}
        initialValues={create}
        schema="create"
        onSubmit={handleSubmit}
      >
        <input type="text" name="name" />
        <Select
          options={options}
          name="type"
          data-select={true}
          data-translate="create"
          data-options="types"
        />
        <textarea name="description"></textarea>
        <Drop dropzone name="thumbnail" />
        <Button type="submit">{t("create.button")}</Button>
      </Form>
    </>
  );
}

export default BasicInfo;
