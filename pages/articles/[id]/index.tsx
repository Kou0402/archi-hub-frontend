import React from 'react'
import { GetServerSideProps, NextPage } from 'next'
import axios from 'axios'
import { ParsedUrlQuery } from 'querystring'
import { API_HOST, API_PATH } from 'constants/const'
import { ArticleHeader, ArticleHeaderProps } from 'components/features/ArticleHeader'
import { ArchiList, ArchiListProps } from 'components/features/ArchiList'
import { ArchiDescription, ArchiDescriptionProps } from 'components/features/ArchiDescription'
import { Archi } from 'types/archi'

type ArticleProps = {
  articleHeaderProps: ArticleHeaderProps
  frontArchiListProps: ArchiListProps
  backArchiListProps: ArchiListProps
  infraArchiListProps: ArchiListProps
  archiDescriptionProps?: ArchiDescriptionProps
}

const Article: NextPage<ArticleProps> = (props) => {
  return (
    <main className="p-2">
      <ArticleHeader {...props.articleHeaderProps}></ArticleHeader>
      <div className="mt-2">
        <ArchiList {...props.frontArchiListProps}></ArchiList>
      </div>
      <div className="mt-2">
        <ArchiList {...props.backArchiListProps}></ArchiList>
      </div>
      <div className="mt-2">
        <ArchiList {...props.infraArchiListProps}></ArchiList>
      </div>
      <div>
        <ArchiDescription {...props.archiDescriptionProps}></ArchiDescription>
      </div>
    </main>
  )
}

type PathParams = ParsedUrlQuery & {
  id: string
}
type FindOneArchiResponse = Pick<
  Archi,
  | 'id'
  | 'title'
  | 'type'
  | 'scale'
  | 'author'
  | 'description'
  | 'frontElements'
  | 'backElements'
  | 'infraElements'
  | 'createdAt'
>
export const getServerSideProps: GetServerSideProps<ArticleProps, PathParams> = async ({
  params,
}) => {
  const res = await axios.get<FindOneArchiResponse>(`${API_HOST}${API_PATH.ARCHIS}/${params?.id}`)

  const articleProps: ArticleProps = {
    articleHeaderProps: {
      title: res.data.title,
      type: res.data.type,
      author: res.data.author,
      createdAt: res.data.createdAt,
    },
    frontArchiListProps: {
      archiAreaType: 'フロントエンド',
      elements: res.data.frontElements,
    },
    backArchiListProps: {
      archiAreaType: 'バックエンド',
      elements: res.data.backElements,
    },
    infraArchiListProps: {
      archiAreaType: 'インフラ',
      elements: res.data.infraElements,
    },
    archiDescriptionProps: {
      description: res.data.description,
    },
  }
  return { props: articleProps }
}

export default Article
