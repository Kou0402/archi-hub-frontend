import React from 'react'

export type SelectFieldProps = {
  label?: string
  options: React.OptionHTMLAttributes<HTMLOptionElement>[]
  setAppType: React.Dispatch<React.SetStateAction<string>>
}

export const SelectField: React.FC<SelectFieldProps> = (props) => {
  return (
    <label className="text-gray-700" htmlFor={props.label}>
      {props.label}
      <select
        id={props.label}
        className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => props.setAppType(e.target.value)}
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
