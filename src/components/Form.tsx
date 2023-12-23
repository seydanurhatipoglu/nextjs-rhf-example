"use client"
import FormProvider from '@/context/FormContext'
import { FormProps } from '@/types/componentProps'
import FormElement from './FormElement'

/**
 * * Using this form component within the application, not FormElement. This provides separate context for each form.
 */
export default function Form({ onSubmit, onSubmitReject = () => null, className, children }: FormProps) {

  return (
    <FormProvider>
      <FormElement className={className} onSubmit={onSubmit} onSubmitReject={onSubmitReject}>
        {children}
      </FormElement>
    </FormProvider>
  )
}