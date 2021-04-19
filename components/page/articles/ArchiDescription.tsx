import React from 'react'

export type ArchiDescriptionProps = {
  archiDescription: string
}

export const ArchiDescription: React.FC<ArchiDescriptionProps> = (props) => {
  return (
    <article>
      <h2>解説</h2>
      <p className="ml-2 text-sm">{props.archiDescription}</p>
    </article>
  )
}
