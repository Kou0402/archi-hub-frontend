import React from 'react'
import { ArchiOmit } from 'types/archi'
import { Flatten } from 'utils/types'

export type ArchiListProps = Flatten<
  Pick<ArchiOmit, 'elements'> & {
    archiAreaType: string
  }
>

export const ArchiList: React.FC<ArchiListProps> = (props) => {
  return (
    <article>
      <h2>{props.archiAreaType}</h2>
      <ul className="flex text-sm">
        {props.elements?.map((element) => {
          return (
            <li className="ml-2" key={element}>
              {element}
            </li>
          )
        })}
      </ul>
    </article>
  )
}
