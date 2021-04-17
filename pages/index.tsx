import React from 'react'
import { NextPage } from 'next'
import { Hero } from 'components/page/top/Hero'
import { ArchiCard, ArchiCardProps } from 'components/common/ArchiCard'

const Home: NextPage = () => {
  const archiCardProps: ArchiCardProps = {
    appTitle: 'アプリタイトル',
    appType: 'Webアプリ',
    appScale: '中規模',
    appElements: ['React', 'Node', 'AWS', 'DynamoDB'],
  }
  return (
    <main className="text-lg">
      <Hero></Hero>
      <section className="bg-light">
        <ArchiCard {...archiCardProps}></ArchiCard>
        <ArchiCard {...archiCardProps}></ArchiCard>
      </section>
    </main>
  )
}

export default Home
