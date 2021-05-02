import React from 'react'
import { AppLogo } from 'components/atom/AppLogo'
import { BaseButton } from 'components/atom/BaseButton'
import Router from 'next/router'

export const Header: React.FC = () => {
  // TODO: ログイン処理を実装する
  const login = () => {
    console.log('login')
    // TODO: 一時的に編集ページに遷移するようにする
    Router.push('/articles/testid/edit')
  }

  return (
    <header className="flex items-center h-16 bg-main p-2">
      <AppLogo></AppLogo>
      <div className="ml-auto">
        <BaseButton buttonText="ログイン" buttonColor="white" handleClick={login}></BaseButton>
      </div>
    </header>
  )
}
