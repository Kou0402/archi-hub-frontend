import React from 'react'
import dayjs from 'dayjs'

export type ArticleHeaderProps = {
  appTitle: string
  appType: 'Webアプリ' | 'スマホアプリ'
  author: string
  createdAt: Date
}

export const ArticleHeader: React.FC<ArticleHeaderProps> = (props) => {
  return (
    <section>
      <ul className="flex items-center text-sm">
        <li>
          <img src="/archi-hub-logo.svg" width="30px"></img>
        </li>
        <li className="ml-1">{props.author}</li>
        <li className="ml-1"> {dayjs(props.createdAt).format('YYYY-MM-DD')}</li>
      </ul>
      <img src="/web-icon.svg" width="80px" className="ml-auto mr-auto mt-4"></img>
      <h1 className="mt-6 text-2xl">{props.appTitle}</h1>
    </section>
  )
}
