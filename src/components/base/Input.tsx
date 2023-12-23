import { InputProps } from "@/types/componentProps";

export default function Input({ name, label, type = 'text', value, error, onChange }: InputProps) {
  return (
    <fieldset>
      <label htmlFor={name}>
        {label}
      </label>
      <input name={name} id={name} className="p-2 bg-transparent" type={type} value={value} aria-invalid={!!error} onChange={onChange} />
      {!!error && <span>{error.message}</span>}
    </fieldset>
  )
}