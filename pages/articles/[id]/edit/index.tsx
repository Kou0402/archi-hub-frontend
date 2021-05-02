import React, { useState } from 'react'
import { NextPage } from 'next'
import { TextField, TextFieldProps } from 'components/atom/TextField'
import { SelectField, SelectFieldProps } from 'components/atom/SelectField'
import { MultipleTextField, MultipleTextFieldProps } from 'components/atom/MultipleTextField'
import { TextareaField, TextareaFieldProps } from 'components/atom/TextareaField'

const Edit: NextPage = () => {
  const [appTitle, setAppTitle] = useState<string>('')
  const [appType, setAppType] = useState<string>('Webアプリ')
  const [appScale, setAppScale] = useState<string>('中規模')
  const [frontArchiItems, setFrontArchiItems] = useState<string[]>([])
  const [backArchiItems, setBackArchiItems] = useState<string[]>([])
  const [infraArchiItems, setInfraArchiItems] = useState<string[]>([])
  const [etcArchiItems, setEtcArchiItems] = useState<string[]>([])
  const [appDescription, setAppDescription] = useState<string>('')

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
    label: 'フロントエンドスタック',
    required: false,
    placeholder: '例：Vue',
    values: frontArchiItems,
    setState: setFrontArchiItems,
  }
  const backArchiFieldProps: MultipleTextFieldProps = {
    label: 'バックエンドスタック',
    required: false,
    placeholder: '例：Go',
    values: backArchiItems,
    setState: setBackArchiItems,
  }
  const infraArchiFieldProps: MultipleTextFieldProps = {
    label: 'インフラスタック',
    required: false,
    placeholder: '例：AWS',
    values: infraArchiItems,
    setState: setInfraArchiItems,
  }
  const etcArchiFieldProps: MultipleTextFieldProps = {
    label: 'その他スタック',
    required: false,
    placeholder: '',
    values: etcArchiItems,
    setState: setEtcArchiItems,
  }
  const descriptionFieldProps: TextareaFieldProps = {
    label: '解説',
    required: false,
    placeholder: '',
    setState: setAppDescription,
  }

  return (
    <main className="p-2 text-lg">
      <div>
        <TextField {...appTitleTextFieldProps}></TextField>
      </div>
      <div className="mt-4">
        <SelectField {...appTypeSelectFieldProps}></SelectField>
      </div>
      <div className="mt-4">
        <SelectField {...appScaleSelectFieldProps}></SelectField>
      </div>
      <div className="mt-4">
        <MultipleTextField {...frontArchiFieldProps}></MultipleTextField>
      </div>
      <div className="mt-4">
        <MultipleTextField {...backArchiFieldProps}></MultipleTextField>
      </div>
      <div className="mt-4">
        <MultipleTextField {...infraArchiFieldProps}></MultipleTextField>
      </div>
      <div className="mt-4">
        <MultipleTextField {...etcArchiFieldProps}></MultipleTextField>
      </div>
      <div className="mt-4">
        <TextareaField {...descriptionFieldProps}></TextareaField>
      </div>
    </main>
  )
}

export default Edit
