import React, { useCallback } from "react";
import { H1Light } from "../../assets/styled/base";
import Form from "./../../components/Form/index";
import Select from "react-select";
import Drop from "./../../components/dropzone/index";
import { Button } from "./../../assets/styled/base";
import { translateSelect } from "../../components/Form/Fields/select/translateSelect";
import { ex } from "./data_example";
import { CreateInterface } from "./../../redux/interfaces/Create";
import { useDispatch } from "react-redux";
import { setCreate } from "../../redux/effects/Create";
import { useTranslation } from "react-i18next";

function BasicInfo() {
  const options = translateSelect({ options: ex }, "create.types");
  const dispatch = useDispatch();

  const { t } = useTranslation();

  // prettier-ignore
  const handleSubmit = useCallback((values: CreateInterface) => {
    dispatch(setCreate(values));
  },[dispatch]);

  return (
    <>
      <H1Light>{t("create.title")}</H1Light>
      <Form schema="create" onSubmit={handleSubmit}>
        <input type="text" name="name" />
        <Select
          options={options}
          name="type"
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
