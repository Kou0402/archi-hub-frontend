import React from 'react'
import { Archi } from 'types/archi'

export type ArchiDescriptionProps = Pick<Archi, 'description'>

export const ArchiDescription: React.FC<ArchiDescriptionProps> = (props) => {
  return (
    <article>
      <h2>解説</h2>
      <p className="ml-2 text-sm">{props.description}</p>
    </article>
  )
}
