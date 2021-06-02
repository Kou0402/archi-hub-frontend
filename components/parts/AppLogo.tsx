import Link from 'next/link'

export const AppLogo: React.FC = () => {
  return (
    <Link href="/">
      <a>
        <img src="/archi-hub-logo.svg" alt="archi-hub-logo" width="48"></img>
      </a>
    </Link>
  )
}
