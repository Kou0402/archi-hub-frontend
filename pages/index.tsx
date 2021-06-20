import React from 'react'
import { GetServerSideProps, NextPage } from 'next'
import axios from 'axios'
import { API_HOST } from 'constants/const'
import { Hero } from 'components/features/Hero'
import { ArchiCard, ArchiCardProps } from 'components/features/ArchiCard'

type HomeProps = {
  archiCardPropsList: ArchiCardProps[]
}

const Home: NextPage<HomeProps> = (props) => {
  return (
    <main className="text-lg">
      <Hero></Hero>
      <section className="bg-lightest">
        {props.archiCardPropsList.map((archiCardProps) => {
          return <ArchiCard {...archiCardProps} key={archiCardProps.id}></ArchiCard>
        })}
      </section>
    </main>
  )
}

type Archi = {
  id: number
  title: string
  type: string
  scale: string
  author: string
  elements: string[]
  updatedAt: Date
}
export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const ARCHI_SHORTS_URI = `${API_HOST}/archis`
  console.info(`GET: ${ARCHI_SHORTS_URI}`)
  const res = await axios.get<Archi[]>(ARCHI_SHORTS_URI)
  console.info(`response: ${JSON.stringify(res.data)}`)
  return { props: { archiCardPropsList: res.data } }
}

export default Home
