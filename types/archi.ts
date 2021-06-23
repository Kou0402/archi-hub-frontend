import { Flatten } from 'utils/types'

export type Archi = {
  id: number
  appid: string
  title: string
  type: Type
  scale: Scale
  author: string
  frontElements?: string[]
  backElements?: string[]
  infraElements?: string[]
  description?: string
  createdAt: Date
  updatedAt: Date
}

export type Type = 'Webアプリ' | 'スマホアプリ'
export type Scale = '個人開発' | '小規模' | '中規模' | '大規模'

export type ArchiOmit = Flatten<
  Pick<Archi, 'id' | 'title' | 'type' | 'scale' | 'author' | 'updatedAt'> & {
    elements?: string[]
  }
>
