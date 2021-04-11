import React from 'react'
import { AppLogo } from 'components/atom/AppLogo'
import { BaseButton } from 'components/atom/BaseButton'

export const Header: React.FC = () => {
  // TODO: ログイン処理を実装する
  const login = () => {
    console.log('login')
  }

  return (
    <header className="flex items-center h-16 bg-main p-2">
      <AppLogo></AppLogo>
      <div className="ml-auto">
        <BaseButton buttonText="ログイン" handleOnClick={login}></BaseButton>
      </div>
    </header>
  )
}
