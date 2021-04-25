import React from 'react'
import { NextPage } from 'next'
import { TextField, TextFieldProps } from 'components/atom/TextField'
import { SelectField, SelectFieldProps } from 'components/atom/SelectField'

const Edit: NextPage = () => {
  const titleTextFieldProps: TextFieldProps = {
    label: 'タイトル',
    required: true,
    placeholder: '例：Hogeブログシステム',
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
  }

  return (
    <main className="p-2 text-lg">
      <TextField {...titleTextFieldProps}></TextField>
      <SelectField {...typeSelectFieldProps}></SelectField>
    </main>
  )
}

export default Edit
