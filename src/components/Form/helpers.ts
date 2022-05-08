/**
 *
 * function to initialize the form
 *
 */

import { ValidateProps } from "./interfaces";
import schemas from "./schemas";
import { FormProps } from "./interfaces";

export const handleInitialValues = (children: JSX.Element[]) => {
  let initialValues = {};

  // add "" to all fields as default
  children.forEach((child: any) => {
    // prevents buttons from being added to initialValues
    if (!child.props.name) return;

    initialValues = {
      ...initialValues,
      [child.props.name]: "",
    };
  });

  return initialValues;
};

/**
 *
 * function to validate all fields
 *
 */

export const handleErrors = async (values: {}, props: FormProps) => {
  const { schema } = props;
  const keys = Object.keys(values);
  const validateSchema = schemas[schema];
  let errors = {};

  // promises are used to handle async validation
  let errorsPromise = new Promise((resolve) => {
    // foreach to search for errors
    keys.forEach(async (key, index, array) => {
      // current field name
      let field = values[key as keyof typeof values];

      // search for the schema of the current field
      let validate: ValidateProps =
        validateSchema?.fields[key as keyof typeof values];

      // validate the current field
      let error = await validateField(validate, field, key);

      // if has an error, add it to the errors
      errors = { ...errors, ...error };

      // if the foreach is finished, resolve the promise
      if (index === array.length - 1) {
        resolve(null);
      }
    });
  });

  // await for the promise to resolve
  await errorsPromise;

  // returns the errors
  return errors;
};

const validateField = async (
  validate: ValidateProps,
  field: {},
  key: string
) => {
  let error = {};

  // search for errors
  await validate.validate(field, { abortEarly: false }).catch((err: any) => {
    // if found any errors, add only the last
    err.inner?.forEach((e: any) => {
      error = { [key]: e.message };
    });
  });

  return error;
};
