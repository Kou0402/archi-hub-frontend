import React from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'

export type TextFieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string
  required: boolean
  register: UseFormRegisterReturn
  errorMessage?: string
}

export const TextField: React.FC<TextFieldProps> = (props) => {
  return (
    <div className="relative">
      <label htmlFor={props.label}>
        {props.label}
        {props.required === true && <span className="text-danger required-dot">*</span>}
      </label>
      <input
        type="text"
        id={props.label}
        className=" rounded-lg border-transparent flex-1 appearance-none border border-lighter
          w-full py-2 px-2 bg-white placeholder-light shadow-sm text-base
          focus:outline-none focus:ring-2 focus:ring-main"
        placeholder={props.placeholder}
        {...props.register}
        autoComplete="off"
      />
      <p>{props.errorMessage}</p>
    </div>
  )
}
