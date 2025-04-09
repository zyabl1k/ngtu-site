import Logo from '/logo.png'
import { __APPLICATION__ } from '@/shared/config'
import { Link } from 'react-router-dom'

export const LogoUI = () => {
  return (
    <Link
      className={'flex items-center gap-2'}
      to={__APPLICATION__.routes.origin}
    >
      <img width={50} src={Logo} alt={'НГТУ'} />
      <div className={'text-lg font-bold leading-4'}>
        NETI
        <br />
        Career Compass
      </div>
    </Link>
  )
}
