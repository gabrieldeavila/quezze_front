import { dark_grey, light_grey } from "../../../../assets/styled/base";

export const SelectStyle = {
  control: (base = {}, state = {}) => ({
    ...base,
    backgroundColor: light_grey,
    border: "none",
  }),
  valueContainer: (base = {}, state = {}) => ({
    ...base,
    padding: 0,
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
    color: dark_grey,
  }),
  menu: (provided = {}) => ({
    ...provided,
    zIndex: 3,
    borderBottom: "1px dotted pink",
  }),
};
