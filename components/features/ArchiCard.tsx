import React from 'react'
import Link from 'next/link'
import dayjs from 'dayjs'
import { ArchiOmit } from 'types/archi'

export type ArchiCardProps = ArchiOmit

export const ArchiCard: React.FC<ArchiCardProps> = (props) => {
  return (
    <article className="flex items-center pt-2 pb-2 pl-5 pr-5">
      <a>
        <img src="/web-icon.svg"></img>
      </a>
      <div className="ml-5">
        <Link href="/articles/[id]" as="/articles/testId">
          <a>
            <h1 className="text-2xl">{props.title}</h1>
          </a>
        </Link>
        <ul className="flex text-sm">
          <li>{props.type}</li>
          <li className="ml-3">{props.scale}</li>
        </ul>
        <ul className="flex text-sm">
          {props.elements.map((element, i) => {
            return (
              <li className={i == 0 ? '' : 'ml-3'} key={element}>
                {element}
              </li>
            )
          })}
        </ul>
        <ul className="flex items-end text-sm">
          <li>
            <img src="/archi-hub-logo.svg" width="30px"></img>
          </li>
          <li className="ml-1">{props.author}</li>
          <li className="ml-1"> {dayjs(props.updatedAt).format('YYYY-MM-DD')}</li>
        </ul>
      </div>
    </article>
  )
}
