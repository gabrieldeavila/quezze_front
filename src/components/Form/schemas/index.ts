import * as yup from "yup";

const create = yup.object({
  name: yup.string().typeError("string").required("required"),
  description: yup.string().typeError("string").required("required"),
  type: yup
    .number()
    .typeError("number")
    .min(0, "min_zero")
    .required("required"),
  thumbnail: yup
    .mixed()
    .test("fileSize", "file_large", (value) => {
      const sizeInBytes = 5000000; //5MB
      return value[0].size <= sizeInBytes;
    })
    .test("fileType", "file_type", function (value) {
      const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png"];
      return SUPPORTED_FORMATS.includes(value[0].type);
    }),
});

const question = yup.object({
  name: yup.string().typeError("string").required("required"),
  description: yup.string().typeError("string").required("required"),
  type: yup
    .number()
    .typeError("number")
    .min(0, "min_zero")
    .required("required"),
  thumbnail: yup
    .mixed()
    .test("fileSize", "file_large", (value) => {
      const sizeInBytes = 5000000; //5MB
      return value[0].size <= sizeInBytes;
    })
    .test("fileType", "file_type", function (value) {
      const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png"];
      return SUPPORTED_FORMATS.includes(value[0].type);
    }),
});

const schemas = {
  create,
  question,
};

export default schemas;
