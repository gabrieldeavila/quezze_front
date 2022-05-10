import React, { useCallback, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { Button, H1Light } from "../../assets/styled/base";
import Form from "../../components/Form";
import Select from "react-select";
import { ex } from "./data_example";
import { translateSelect } from "../../components/Form/Fields/select/translateSelect";
import Drop from "../../components/dropzone";
import { setCreate } from "./../../redux/effects/Create";
import { CreateInterface } from "./../../redux/interfaces/Create";

export default function Create() {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const options = translateSelect({ options: ex }, "create.types");

  const handleSubmit = useCallback(
    (values: CreateInterface) => {
      dispatch(setCreate(values));
    },
    [dispatch]
  );

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
