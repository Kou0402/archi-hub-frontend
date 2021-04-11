import React from 'react'
import { NextPage } from 'next'
import { Hero } from 'components/page/top/Hero'

const Home: NextPage = () => {
  return (
    <main className="text-lg">
      <Hero></Hero>
    </main>
  )
}

export default Home
