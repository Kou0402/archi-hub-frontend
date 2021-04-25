import React from 'react'

export type TextFieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string
  required: boolean
  setAppTitle: React.Dispatch<React.SetStateAction<string>>
}

export const TextField: React.FC<TextFieldProps> = (props) => {
  return (
    <div className="relative">
      <label htmlFor={props.label} className="text-gray-700">
        {props.label}
        {props.required === true && <span className="text-red-500 required-dot">*</span>}
      </label>
      <input
        type="text"
        id={props.label}
        className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
        placeholder={props.placeholder}
        onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
          props.setAppTitle(e.target.value)
        }}
      />
    </div>
  )
}
