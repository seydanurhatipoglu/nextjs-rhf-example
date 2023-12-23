"use client"
import { FormContext } from '@/context/FormContext'
import { FormProps } from '@/types/componentProps'
import { useContext, useTransition } from 'react'

export default function FormElement({ onSubmit, onSubmitReject, className, children }: FormProps) {
  const [isPending, startTransition] = useTransition();
  const { handleSubmit } = useContext(FormContext)

  const handleFormSubmit = handleSubmit(data => {
    startTransition(() => {
      onSubmit(data);
    });
  }, onSubmitReject);
  return (
    <form className={className} onSubmit={handleFormSubmit}>
      {children}
    </form>
  )
}