import React from 'react'

export type ArchiListProps = {
  archiAreaType: string
  archiElements: string[]
}

export const ArchiList: React.FC<ArchiListProps> = (props) => {
  return (
    <article>
      <h2>{props.archiAreaType}</h2>
      <ul className="flex text-sm">
        {props.archiElements.map((archiElement) => {
          return (
            <li className="ml-2" key={archiElement}>
              {archiElement}
            </li>
          )
        })}
      </ul>
    </article>
  )
}
