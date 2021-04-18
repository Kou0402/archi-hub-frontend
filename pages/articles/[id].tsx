import React from 'react'
import { NextPage } from 'next'
import { ArticleHeader, ArticleHeaderProps } from 'components/page/articles/ArticleHeader'
import { ArchiList, ArchiListProps } from 'components/page/articles/ArchiList'

const Article: NextPage = () => {
  const articleHeaderProps: ArticleHeaderProps = {
    appTitle: 'アプリタイトル',
    appType: 'webアプリ',
    author: 'kou0402',
    createdAt: new Date(),
  }
  const frontArchiListProps: ArchiListProps = {
    archiAreaType: 'フロントエンド',
    archiElements: ['React', 'Next', 'Redux', 'TypeScript', 'Tailwind'],
  }
  const backArchiListProps: ArchiListProps = {
    archiAreaType: 'バックエンド',
    archiElements: ['Node.js', 'Express', 'TypeScript'],
  }
  const infraArchiListProps: ArchiListProps = {
    archiAreaType: 'インフラ',
    archiElements: ['Vercel', 'Heroku'],
  }

  return (
    <main className="pt-2 pl-2">
      <ArticleHeader {...articleHeaderProps}></ArticleHeader>
      <div className="mt-2">
        <ArchiList {...frontArchiListProps}></ArchiList>
      </div>
      <div className="mt-2">
        <ArchiList {...backArchiListProps}></ArchiList>
      </div>
      <div className="mt-2">
        <ArchiList {...infraArchiListProps}></ArchiList>
      </div>
    </main>
  )
}

export default Article
