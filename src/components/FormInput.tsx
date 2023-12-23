import { FormContext } from "@/context/FormContext";
import { FormInputProps, InputProps } from "@/types/componentProps";
import { useContext } from "react";
import { Controller } from "react-hook-form";
import Input from "./base/Input";

export default function FormInput({ name, label, rules, children, value, type = "text", ...props }: FormInputProps) {
  const { control } = useContext(FormContext)

  return (
    <Controller
      name={name}
      control={control}
      rules={{
        validate: rules,
      }}
      defaultValue={value}
      render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
        <Input
          {...props}
          name={name}
          label={label}
          error={error}
          onChange={onChange}
          onBlur={onBlur}
          value={value}>
          {children}
        </Input>
      )}
    />
  )
}