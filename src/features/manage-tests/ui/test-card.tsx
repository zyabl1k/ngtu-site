import { ITest } from '@types'
import { Link } from 'react-router-dom'

export const TestCard = ({ title, image, description, id }: ITest) => {
  return (
    <Link
      to={`/test/${id}`}
      className={
        'overflow-hidden rounded-2xl shadow-lg transition hover:shadow-xl'
      }
    >
      <img src={image} alt={'Фото теста'} />
      <div className={'p-4'}>
        <div className={'text-lg font-bold'}>{title}</div>
        <div className={'mt-1'}>{description}</div>
      </div>
    </Link>
  )
}
