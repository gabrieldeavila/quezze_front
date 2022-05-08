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
import { translateSelect } from "../../components/Form/Fields/select/translateSelect";
import Drop from "../../components/dropzone";

export default function Create() {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCreateAction({ name: "", type: "", description: "" }));
  }, [dispatch]);

  const create = useSelector((state: AppState) => state.create);
  const options = translateSelect({ options: ex }, "create.types");

  return (
    <>
      <H1Light>{t("create.title")}</H1Light>
      <Form schema="create" onSubmit={() => console.log("mano")}>
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
