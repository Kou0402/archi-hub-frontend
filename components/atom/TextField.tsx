import React from 'react'

export type TextFieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string
  required: boolean
  setState: React.Dispatch<React.SetStateAction<string>>
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
          w-full py-2 px-4 bg-white placeholder-light shadow-sm text-base
          focus:outline-none focus:ring-2 focus:ring-main focus:border-transparent"
        placeholder={props.placeholder}
        onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
          props.setState(e.target.value)
        }}
      />
    </div>
  )
}
