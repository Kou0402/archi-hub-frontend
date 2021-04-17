import React from 'react'
import { NextPage } from 'next'
import { ArticleHeader, ArticleHeaderProps } from 'components/page/articles/ArticleHeader'

const Article: NextPage = () => {
  const articleHeaderProps: ArticleHeaderProps = {
    appTitle: 'アプリタイトル',
    appType: 'webアプリ',
    author: 'kou0402',
    createdAt: new Date(),
  }

  return (
    <main>
      <ArticleHeader {...articleHeaderProps}></ArticleHeader>
    </main>
  )
}

export default Article
