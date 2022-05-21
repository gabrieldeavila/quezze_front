import { dark_grey, light_grey } from "../../../../assets/styled/base";
import { components } from "react-select";
import { t } from "i18next";

export const SelectStyle = {
  control: (base = {}, state = {}) => ({
    ...base,
    backgroundColor: light_grey,
    border: "none",
    boxShadow: "none",
    borderRadius: "5px",
    cursor: "pointer",
  }),
  option: (base = {}) => ({
    ...base,
    cursor: "pointer",
  }),
  input: (base = {}, state = {}) => ({
    ...base,
    boxShadow: "none",
  }),
  valueContainer: (base = {}, state = {}) => ({
    ...base,
    padding: "1rem",
    outline: "none",
  }),
  singleValue: (base = {}, state = {}) => ({
    ...base,
    fontWeight: "bold",
    color: dark_grey,
    height: "fit-content",
    margin: "0px",
  }),
  dropdownIndicator: (base = {}, state = {}) => ({
    ...base,
    color: "red",
  }),
  menu: (provided = {}) => ({
    ...provided,
    zIndex: 3,
    borderBottom: "1px dotted pink",
  }),
};

export const NoOptionsMessage = (props: any) => {
  return (
    <components.NoOptionsMessage {...props}>
      <span>{t("form.no_options")}</span>
    </components.NoOptionsMessage>
  );
};
