import React, { useState } from 'react'
import { NextPage } from 'next'
import { TextField, TextFieldProps } from 'components/atom/TextField'
import { SelectField, SelectFieldProps } from 'components/atom/SelectField'

const Edit: NextPage = () => {
  const [appTitle, setAppTitle] = useState<string>('')
  const [appType, setAppType] = useState<string>('Webアプリ')

  const titleTextFieldProps: TextFieldProps = {
    label: 'タイトル',
    required: true,
    placeholder: '例：Hogeブログシステム',
    setAppTitle,
  }
  const typeSelectFieldProps: SelectFieldProps = {
    label: 'タイプ',
    options: [
      {
        value: 'Webアプリ',
        label: 'Webアプリ',
      },
      {
        value: 'スマホアプリ',
        label: 'スマホアプリ',
      },
    ],
    setAppType,
  }

  return (
    <main className="p-2 text-lg">
      <TextField {...titleTextFieldProps}></TextField>
      <SelectField {...typeSelectFieldProps}></SelectField>

      <div>{appTitle}</div>
      <div>{appType}</div>
    </main>
  )
}

export default Edit
