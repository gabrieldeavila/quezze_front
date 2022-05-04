export interface FormProps {
  submitText?: string;
}

export interface InputWrapperProps {
  removeBoxShadow?: boolean;
}

export interface FormWrapperProps {
  mt?: string;
}

export interface LabelProps {
  for: string;
}

export interface FieldTypeProps {
  child: JSX.Element;
  setValues: (value: any) => void;
  values: {};
  isSubmitting: boolean;
  errors: {};
}

export interface FieldsProps {
  name: string;
  child: JSX.Element;
  values: {};
  setValues: (value: any) => void;
}

export interface SubmitProps {
  isSubmitting: boolean;
  child: JSX.Element;
  errors: {};
}
