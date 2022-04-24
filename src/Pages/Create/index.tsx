import { withFormik } from "formik";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { Button, H1Dark, H1Light } from "../../assets/styled/base";
import Form from "../../components/Form";
import { setCreateAction } from "../../redux/actions/CreateActions";
import { AppState } from "../../redux/store";
import Select from "react-select";
import { ex } from "./data_example";

export default function Create() {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCreateAction({ name: "", type: "", description: "" }));
  }, [dispatch]);

  const create = useSelector((state: AppState) => state.create);

  return (
    <>
      <H1Light>{t("create.title")}</H1Light>
      <Form>
        <input type="text" name="name" />
        <input type="text" name="type" />
        <Select
          options={ex}
          name="type"
          data-translate="create"
          data-options="types"
        />
        <textarea name="description"></textarea>
        <Button type="submit">{t("create.button")}</Button>
      </Form>
    </>
  );
}
