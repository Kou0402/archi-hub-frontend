import React from 'react'
import { GetServerSideProps, NextPage } from 'next'
import axios from 'axios'
import { ParsedUrlQuery } from 'querystring'
import { API_HOST } from 'constants/const'
import { ArticleHeader, ArticleHeaderProps } from 'components/features/ArticleHeader'
import { ArchiList, ArchiListProps } from 'components/features/ArchiList'
import { ArchiDescription, ArchiDescriptionProps } from 'components/features/ArchiDescription'

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
type Archi = {
  appId: string
  appTitle: string
  appType: 'Webアプリ' | 'スマホアプリ'
  appScale: '個人開発' | '小規模' | '中規模' | '大規模'
  author: string
  createdAt: Date
  frontElements?: string[]
  backElements?: string[]
  infraElements?: string[]
  archiDescription?: string
}
export const getServerSideProps: GetServerSideProps<ArticleProps, PathParams> = async ({
  params,
}) => {
  const ARCHI_SHORTS_URI = `${API_HOST}/archis/${params?.id}`
  console.info(`GET: ${ARCHI_SHORTS_URI}`)
  const res = await axios.get<Archi>(ARCHI_SHORTS_URI)
  console.info(`response: ${JSON.stringify(res.data)}`)

  const articleProps: ArticleProps = {
    articleHeaderProps: {
      appTitle: res.data.appTitle,
      appType: res.data.appType,
      author: res.data.author,
      createdAt: res.data.createdAt,
    },
    frontArchiListProps: {
      archiAreaType: 'フロントエンド',
      archiElements: res.data.frontElements,
    },
    backArchiListProps: {
      archiAreaType: 'バックエンド',
      archiElements: res.data.backElements,
    },
    infraArchiListProps: {
      archiAreaType: 'インフラ',
      archiElements: res.data.infraElements,
    },
    archiDescriptionProps: {
      archiDescription: res.data.archiDescription,
    },
  }
  return { props: articleProps }
}

export default Article
