import { withFormik } from "formik";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { H1Dark, H1Light } from "../../assets/styled/base";
import Form from "../../components/Form";
import { setCreateAction } from "../../redux/actions/CreateActions";
import { AppState } from "../../redux/store";

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
        <input type="text" name="description" />
        <button type="submit">{t("create.button")}</button>
      </Form>
    </>
  );
}
