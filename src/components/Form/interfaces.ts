export interface FormProps {
  submitText?: string;
  schema: "create" | "question";
  initialValues: {};
  action: (values: any) => void;
  onSubmit: (values: any) => void;
  children: JSX.Element[];
}

export interface InputWrapperProps {
  removeBoxShadow?: boolean;
}

export interface FormWrapperProps {
  mt?: string;
}

export interface FieldTypeProps {
  child: JSX.Element;
  action: (value: any) => void;
  setValues: (value: any) => void;
  values: {};
  isSubmitting: boolean;
  setFieldTouched: (field: string, touched: boolean) => void;
  errors: {};
}

export interface FieldsProps {
  name: string;
  child: JSX.Element;
  values: {};
  setFieldTouched: (field: string, touched: boolean) => void;
  setValues: (value: any) => void;
  action: (value: any) => void;
}

export interface ErrorProps {
  errors: {};
  touched: {};
  child: JSX.Element;
}

export interface SubmitProps {
  isSubmitting: boolean;
  child: JSX.Element;
  errors: {};
}

export interface SelectProps {
  value: number;
  label: string;
}

export interface TranslateSelectOptionsProps {
  options: SelectProps[];
}

export interface ValidateProps {
  validate: (fields: object, arg2: object) => any;
}
