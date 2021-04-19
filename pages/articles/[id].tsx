import React from 'react'
import { NextPage } from 'next'
import { ArticleHeader, ArticleHeaderProps } from 'components/page/articles/ArticleHeader'
import { ArchiList, ArchiListProps } from 'components/page/articles/ArchiList'
import { ArchiDescription } from 'components/page/articles/ArchiDescription'

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
  const archiDescriptionProps: ArchiDescriptionProps = {
    archiDescription: 'アーキテクチャの解説アーキテクチャの解説アーキテクチャの解説',
  }

  return (
    <main className="p-2">
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
      <div>
        <ArchiDescription {...archiDescriptionProps}></ArchiDescription>
      </div>
    </main>
  )
}

export default Article
