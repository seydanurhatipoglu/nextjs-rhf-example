import { ValueOf } from "next/dist/shared/lib/constants";
import { HTMLInputTypeAttribute, ReactNode } from "react";
import {
  FieldError,
  FieldValues,
  Noop,
  SubmitErrorHandler,
  SubmitHandler,
} from "react-hook-form";

type BaseComponentProps = {
  children?: ReactNode;
  className?: string;
};

type FormProps = {
  onSubmit: SubmitHandler<FieldValues>;
  onSubmitReject?: SubmitErrorHandler<FieldValues>;
} & BaseComponentProps;

type InputProps = {
  name: string;
  label: string;
  type?: HTMLInputTypeAttribute;
  value?: any;
  error?: FieldError;
  onChange: (...event: any[]) => void;
  onBlur: Noop;
} & BaseComponentProps;

type FormInputProps = Pick<InputProps, "name" | "label" | "type" | "value"> & {
  rules?: Record<string, (...args: any) => true | string>;
} & BaseComponentProps;
