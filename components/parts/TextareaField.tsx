import React from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'

export type TextareaFieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string
  required: boolean
  register: UseFormRegisterReturn
  errorMessage?: string
}

export const TextareaField: React.FC<TextareaFieldProps> = (props) => {
  return (
    <div className="relative">
      <label htmlFor={props.label}>
        {props.label}
        {props.required === true && <span className="text-danger required-dot">*</span>}
      </label>
      <textarea
        className="flex-1 appearance-none border border-lighter w-full py-2 px-2 bg-white
          placeholder-light rounded-lg text-base focus:outline-none
          focus:ring-2 focus:ring-main"
        id={props.label}
        placeholder={props.placeholder}
        rows={5}
        {...props.register}
        autoComplete="off"
      />
      <p>{props.errorMessage}</p>
    </div>
  )
}
