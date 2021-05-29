import React from 'react'
import { GetServerSideProps, NextPage } from 'next'
import axios from 'axios'
import { API_HOST } from 'constants/const'
import { Hero } from 'components/page/top/Hero'
import { ArchiCard, ArchiCardProps } from 'components/common/ArchiCard'

type HomeProps = {
  archiCardPropsList: ArchiCardProps[]
}

const Home: NextPage<HomeProps> = (props) => {
  return (
    <main className="text-lg">
      <Hero></Hero>
      <section className="bg-lightest">
        {props.archiCardPropsList.map((archiCardProps) => {
          return <ArchiCard {...archiCardProps} key={archiCardProps.appId}></ArchiCard>
        })}
      </section>
    </main>
  )
}

type ArchiShort = {
  appId: string
  appTitle: string
  appType: 'Webアプリ' | 'スマホアプリ'
  appScale: '個人開発' | '小規模' | '中規模' | '大規模'
  appElements: string[]
}
export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const ARCHI_SHORTS_URI = `${API_HOST}/archi-shorts`
  console.info(`GET: ${ARCHI_SHORTS_URI}`)
  const res = await axios.get<ArchiShort[]>(ARCHI_SHORTS_URI)
  console.info(`response: ${JSON.stringify(res.data)}`)
  return { props: { archiCardPropsList: res.data } }
}

export default Home
