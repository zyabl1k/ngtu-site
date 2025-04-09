import { Envelope } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'

const HelpView = () => {
  return (
    <div className={'flex h-screen flex-col items-center justify-center'}>
      <div className={'rounded-2xl px-24 py-12 shadow-2xl'}>
        <h1 className={'text-center text-6xl font-bold uppercase'}>
          Ты лучший!
        </h1>
        <h2 className={'text-center text-xl'}>
          Мы уверены, что у тебя все получится :)
        </h2>
        <div className={'mt-4'}>
          <div>Но по вопросам обращайся сюда:</div>
          <Link
            className={
              'flex items-center gap-1 transition-opacity hover:opacity-75'
            }
            to={'mailto:neti.career@yandex.ru'}
          >
            <Envelope size={24} />
            <div>neti.career@yandex.ru</div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HelpView
