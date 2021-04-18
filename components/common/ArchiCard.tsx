import React from 'react'
import Link from 'next/link'

export type ArchiCardProps = {
  appTitle: string
  appType: string
  appScale: string
  appElements: string[]
}

export const ArchiCard: React.FC<ArchiCardProps> = (props) => {
  return (
    <article className="flex items-center pt-2 pb-2 pl-5 pr-5">
      <a>
        <img src="/web-icon.svg"></img>
      </a>
      <div className="ml-5">
        <Link href="/articles/[id]" as="/articles/testId">
          <a>
            <h1 className="text-2xl">{props.appTitle}</h1>
          </a>
        </Link>
        <ul className="flex text-sm">
          <li>{props.appType}</li>
          <li className="ml-3">{props.appScale}</li>
        </ul>
        <ul className="flex text-sm">
          {props.appElements.map((appElement, i) => {
            return (
              <li className={i == 0 ? '' : 'ml-3'} key={appElement}>
                {appElement}
              </li>
            )
          })}
        </ul>
        <ul className="flex items-end text-sm">
          <li>
            <img src="/archi-hub-logo.svg" width="30px"></img>
          </li>
          <li className="ml-1">useName</li>
          <li className="ml-1"> createdAt</li>
        </ul>
      </div>
    </article>
  )
}
