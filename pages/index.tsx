import React from 'react'
import { NextPage } from 'next'
import { Hero } from 'components/page/top/Hero'
import { ArchiCard, ArchiCardProps } from 'components/common/ArchiCard'
import { API_HOST } from 'constants/const'
import axios from 'axios'

type HomeProps = {
  archiShorts: ArchiCardProps[]
}

const Home: NextPage<HomeProps> = (props) => {
  return (
    <main className="text-lg">
      <Hero></Hero>
      <section className="bg-lightest">
        {props.archiShorts.map((archiShort) => {
          return <ArchiCard {...archiShort} key={archiShort.appId}></ArchiCard>
        })}
      </section>
    </main>
  )
}

export const getServerSideProps = async () => {
  const ARCHI_SHORTS_URI = `${API_HOST}/archi-shorts`
  console.info(`GET: ${ARCHI_SHORTS_URI}`)
  const res = await axios.get(ARCHI_SHORTS_URI)
  console.info(`response: ${JSON.stringify(res.data)}`)
  return { props: { archiShorts: res.data } }
}

export default Home
