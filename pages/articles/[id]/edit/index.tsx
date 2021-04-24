import React from 'react'
import { NextPage } from 'next'
import { TextField, TextFieldProps } from 'components/atom/TextField'

const Edit: NextPage = () => {
  const titleTxtFieldProps: TextFieldProps = {
    label: 'タイトル',
    required: true,
    placeholder: '例：Hogeブログシステム',
  }

  return (
    <main className="p-2 text-lg">
      <TextField {...titleTxtFieldProps}></TextField>
    </main>
  )
}

export default Edit
