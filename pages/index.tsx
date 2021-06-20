import React from 'react'
import { GetServerSideProps, NextPage } from 'next'
import axios from 'axios'
import { API_HOST, API_PATH } from 'constants/const'
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
  const res = await axios.get<Archi[]>(`${API_HOST}${API_PATH.ARCHIS}`)
  return { props: { archiCardPropsList: res.data } }
}

export default Home
