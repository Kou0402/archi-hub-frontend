import React, { useState } from 'react'
import { NextPage } from 'next'
import { TextField, TextFieldProps } from 'components/atom/TextField'
import { SelectField, SelectFieldProps } from 'components/atom/SelectField'
import { MultipleTextField, MultipleTextFieldProps } from 'components/atom/MultipleTextField'

const Edit: NextPage = () => {
  const [appTitle, setAppTitle] = useState<string>('')
  const [appType, setAppType] = useState<string>('Webアプリ')
  const [appScale, setAppScale] = useState<string>('中規模')
  const [frontArchiItems, setfrontArchiItems] = useState<string[]>([])

  const appTitleTextFieldProps: TextFieldProps = {
    label: 'タイトル',
    required: true,
    placeholder: '例：Hogeブログシステム',
    setState: setAppTitle,
  }
  const appTypeSelectFieldProps: SelectFieldProps = {
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
    setState: setAppType,
  }
  const appScaleSelectFieldProps: SelectFieldProps = {
    label: '規模',
    options: [
      {
        value: '小規模',
        label: '小規模',
      },
      {
        value: '中規模',
        label: '中規模',
      },
    ],
    setState: setAppScale,
  }
  const frontArchiFieldProps: MultipleTextFieldProps = {
    label: 'フロントエンド',
    required: false,
    placeholder: '例：Vue',
    values: frontArchiItems,
    setState: setfrontArchiItems,
  }

  return (
    <main className="p-2 text-lg">
      <TextField {...appTitleTextFieldProps}></TextField>
      <SelectField {...appTypeSelectFieldProps}></SelectField>
      <SelectField {...appScaleSelectFieldProps}></SelectField>
      <MultipleTextField {...frontArchiFieldProps}></MultipleTextField>
    </main>
  )
}

export default Edit
