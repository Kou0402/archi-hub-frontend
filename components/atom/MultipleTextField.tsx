import React, { useState } from 'react'

export type MultipleTextFieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string
  required: boolean
  values: string[]
  setState: React.Dispatch<React.SetStateAction<string[]>>
}

export const MultipleTextField: React.FC<MultipleTextFieldProps> = (props) => {
  const [inputValue, setInputValue] = useState<string>('')

  const addValue = (): void => {
    if (inputValue === '') {
      return
    }
    const copiedValues: string[] = props.values.slice()
    copiedValues.push(inputValue)
    props.setState(copiedValues)
    setInputValue('')
  }
  const removeValue = (targetValue: string): void => {
    props.setState(props.values.filter((value) => value !== targetValue))
  }

  const handlePlusClick = () => {
    addValue()
  }
  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // IME 確定と区別するため keyCode を使用する
    if (e.keyCode === 13) {
      addValue()
    }
  }
  const handleBackspaceClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    removeValue(e.currentTarget.value)
  }

  return (
    <div className="relative">
      <label htmlFor={props.label} className="text-gray-700">
        {props.label}
        {props.required === true && <span className="text-red-500 required-dot">*</span>}
      </label>
      <input
        type="text"
        id={props.label}
        value={inputValue}
        className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300
          w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base
          focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
        placeholder={props.placeholder}
        onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
          setInputValue(e.target.value)
        }}
        onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
          handleInputKeyDown(e)
        }}
      />
      <button
        className="absolute top-9 right-2"
        onClick={() => {
          handlePlusClick()
        }}
      >
        <img src="/plus-icon.svg" width="28px"></img>
      </button>
      {props.values.length !== 0 && (
        <ul className="mt-2">
          {props.values.map((value) => {
            return (
              <li
                className={
                  'inline-flex items-center text-sm px-2 mr-2 rounded-full border border-gray-300'
                }
                key={value}
              >
                {value}
                <button
                  className="ml-2"
                  value={value}
                  onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                    handleBackspaceClick(e)
                  }}
                >
                  <img src="/backspace-icon.svg" width="28px"></img>
                </button>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
