import React from 'react'

export const Hero: React.FC = () => {
  return (
    <section className="text-center pt-5">
      <h1 className="text-3xl">ArchiHub</h1>
      <h2 className="text-sm mt-1">アーキテクチャを共有しよう。</h2>
      <img src="/archi-hub-illustration.svg" width="190px" className="ml-auto mr-auto mt-4"></img>
    </section>
  )
}
