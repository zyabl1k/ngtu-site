import { ITestResult } from '@types'
import { Link } from 'react-router-dom'

export const ResultCard = ({ id, title, announce }: ITestResult) => {
  return (
    <Link
      to={`/result/${id}`}
      className={
        'overflow-hidden rounded-2xl p-6 shadow-lg transition hover:shadow-xl'
      }
    >
      <div className={'text-lg font-bold'}>{title}</div>
      <div className={'mt-1'}>{announce}</div>
    </Link>
  )
}
