import React, { useState } from 'react'
import { NextPage } from 'next'
import { TextField, TextFieldProps } from 'components/parts/TextField'
import { SelectField, SelectFieldProps } from 'components/parts/SelectField'
import { MultipleTextField, MultipleTextFieldProps } from 'components/parts/MultipleTextField'
import { TextareaField, TextareaFieldProps } from 'components/parts/TextareaField'
import { BaseButton, BaseButtonProps } from 'components/parts/BaseButton'
import axios from 'axios'
import { API_HOST } from 'constants/const'

const Edit: NextPage = () => {
  const [title, setTitle] = useState<string>('')
  const [type, setType] = useState<string>('Webアプリ')
  const [scale, setScale] = useState<string>('中規模')
  const [description, setDescription] = useState<string>('')
  const [frontElements, setFrontElements] = useState<string[]>([])
  const [backElements, setBackElements] = useState<string[]>([])
  const [infraElements, setInfraElements] = useState<string[]>([])
  // TODO: その他スタックを追加できるようにする
  const [etcArchiItems, setEtcArchiItems] = useState<string[]>([])

  const appTitleTextFieldProps: TextFieldProps = {
    label: 'タイトル',
    required: true,
    placeholder: '例：Hogeブログシステム',
    setState: setTitle,
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
    setState: setType,
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
    setState: setScale,
  }
  const frontArchiFieldProps: MultipleTextFieldProps = {
    label: 'フロントエンドスタック',
    required: false,
    placeholder: '例：Vue',
    values: frontElements,
    setState: setFrontElements,
  }
  const backArchiFieldProps: MultipleTextFieldProps = {
    label: 'バックエンドスタック',
    required: false,
    placeholder: '例：Go',
    values: backElements,
    setState: setBackElements,
  }
  const infraArchiFieldProps: MultipleTextFieldProps = {
    label: 'インフラスタック',
    required: false,
    placeholder: '例：AWS',
    values: infraElements,
    setState: setInfraElements,
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
    setState: setDescription,
  }

  type CreateArchiRequestDto = {
    title: string
    type: string
    scale: string
    author: string
    description?: string
    frontElements?: string[]
    backElements?: string[]
    infraElements?: string[]
  }

  const publishButtonProps: BaseButtonProps = {
    buttonText: '公開する',
    buttonColor: 'main',
    handleClick: async () => {
      console.log('公開する')

      const createArchiDto: CreateArchiRequestDto = {
        title,
        type,
        scale,
        // TODO: 認証実装したらユーザー名にしたい
        author: 'ゲスト',
        description,
        frontElements,
        backElements,
        infraElements,
      }

      const ARCHI_URI = `${API_HOST}/archis`
      const res = await axios.post(ARCHI_URI, createArchiDto)
      console.log(res)
    },
  }

  return (
    <main className="p-2 text-lg">
      <div>
        <TextField {...appTitleTextFieldProps}></TextField>
      </div>
      <div className="mt-2">
        <SelectField {...appTypeSelectFieldProps}></SelectField>
      </div>
      <div className="mt-2">
        <SelectField {...appScaleSelectFieldProps}></SelectField>
      </div>
      <div className="mt-2">
        <MultipleTextField {...frontArchiFieldProps}></MultipleTextField>
      </div>
      <div className="mt-2">
        <MultipleTextField {...backArchiFieldProps}></MultipleTextField>
      </div>
      <div className="mt-2">
        <MultipleTextField {...infraArchiFieldProps}></MultipleTextField>
      </div>
      <div className="mt-2">
        <MultipleTextField {...etcArchiFieldProps}></MultipleTextField>
      </div>
      <div className="mt-2">
        <TextareaField {...descriptionFieldProps}></TextareaField>
      </div>
      <div className="flex justify-center mt-2">
        <BaseButton {...publishButtonProps}></BaseButton>
      </div>
    </main>
  )
}

export default Edit
