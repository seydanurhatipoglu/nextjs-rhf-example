"use client"
import { BaseComponentProps } from "@/types/componentProps";
import { UseFormReturn, useForm } from "react-hook-form";
import { createContext } from "react";

export const FormContext = createContext({} as UseFormReturn)

export default function FormProvider({ children }: BaseComponentProps) {
  return <FormContext.Provider value={useForm({ mode: 'onTouched' })}>
    {children}
  </FormContext.Provider>
} 