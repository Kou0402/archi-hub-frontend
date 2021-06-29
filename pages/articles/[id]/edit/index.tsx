import React, { useState } from 'react'
import { NextPage } from 'next'
import { TextField, TextFieldProps } from 'components/parts/TextField'
import { SelectField, SelectFieldProps } from 'components/parts/SelectField'
import { MultipleTextField, MultipleTextFieldProps } from 'components/parts/MultipleTextField'
import { TextareaField, TextareaFieldProps } from 'components/parts/TextareaField'
import { BaseButton, BaseButtonProps } from 'components/parts/BaseButton'
import axios from 'axios'
import { API_HOST, API_PATH } from 'constants/api'
import { Archi, Scale, Type } from 'types/archi'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { convertMessage } from 'utils/functions'
import { MESSAGE } from 'constants/message'

const Edit: NextPage = () => {
  const schema = yup.object().shape({
    title: yup
      .string()
      .required(convertMessage(MESSAGE.REQUIRED, 'タイトル'))
      .max(100, convertMessage(MESSAGE.MAX_LENGTH, 'タイトル', '100')),
  })
  // React-Hook-Form で管理されるフォームの型。
  // elements のフィールドコンポーネントは特殊仕様のため除外し、useState で管理する。
  type ArchiFormWithoutElements = Pick<Archi, 'title' | 'type' | 'scale' | 'description'>
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ArchiFormWithoutElements>({
    mode: 'onTouched',
    defaultValues: {
      type: 'Webアプリ',
      scale: '中規模',
    },
    resolver: yupResolver(schema),
  })

  const [frontElements, setFrontElements] = useState<string[]>([])
  const [backElements, setBackElements] = useState<string[]>([])
  const [infraElements, setInfraElements] = useState<string[]>([])
  // TODO: その他スタックを追加できるようにする
  // const [etcArchiItems, setEtcArchiItems] = useState<string[]>([])

  const appTitleTextFieldProps: TextFieldProps = {
    label: 'タイトル',
    required: true,
    placeholder: '例：Hogeブログシステム',
    register: register('title'),
    errorMessage: errors.title?.message,
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
    register: register('type'),
    errorMessage: errors.type?.message,
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
    register: register('scale'),
    errorMessage: errors.scale?.message,
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
  const descriptionFieldProps: TextareaFieldProps = {
    label: '解説',
    required: false,
    placeholder: '',
    register: register('description'),
    errorMessage: errors.description?.message,
  }

  const publishButtonProps: BaseButtonProps = {
    buttonText: '公開する',
    buttonColor: 'main',
    type: 'submit',
  }

  type CreateArchiRequestDto = Pick<
    Archi,
    | 'title'
    | 'type'
    | 'scale'
    | 'author'
    | 'description'
    | 'frontElements'
    | 'backElements'
    | 'infraElements'
  >
  const onSubmit = async (form: ArchiFormWithoutElements) => {
    const createArchiDto: CreateArchiRequestDto = {
      title: form.title,
      type: form.type as Type,
      scale: form.scale as Scale,
      //   // TODO: 認証実装したらユーザー名にしたい
      author: 'ゲスト',
      description: form.description,
      frontElements,
      backElements,
      infraElements,
    }

    await axios.post(`${API_HOST}${API_PATH.ARCHIS}`, createArchiDto)
  }

  return (
    <main className="p-2 text-lg">
      <form onSubmit={handleSubmit(onSubmit)}>
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
          <TextareaField {...descriptionFieldProps}></TextareaField>
        </div>
        <div className="flex justify-center mt-2">
          <BaseButton {...publishButtonProps}></BaseButton>
        </div>
      </form>
    </main>
  )
}

export default Edit
