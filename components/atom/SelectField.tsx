import React from 'react'

export type SelectFieldProps = {
  label?: string
  options: React.OptionHTMLAttributes<HTMLOptionElement>[]
  setState: React.Dispatch<React.SetStateAction<string>>
}

export const SelectField: React.FC<SelectFieldProps> = (props) => {
  return (
    <label htmlFor={props.label}>
      {props.label}
      <select
        id={props.label}
        className="block w-full py-2 px-1 border border-lighter bg-white rounded-md shadow-sm
          focus:outline-none focus:ring-2 focus:ring-main text-base"
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => props.setState(e.target.value)}
      >
        {props.options.map((option, i) => {
          return (
            <option value={option.value} key={i}>
              {option.label}
            </option>
          )
        })}
      </select>
    </label>
  )
}
