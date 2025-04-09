import { Link } from 'react-router-dom'
import { Envelope, MapPin, PhoneIncoming } from '@phosphor-icons/react'

export const Footer = () => {
  return (
    <footer className={'mx-2'}>
      <div
        className={
          'flex flex-wrap items-start justify-between gap-4 rounded-3xl bg-root-red-main p-10 text-white'
        }
      >
        <div className={'flex flex-col gap-2'}>
          <div className={'text-2xl font-black'}>
            Новосибирский Государственный
            <br /> Технический университет
          </div>
          <Link
            className={'italic transition hover:opacity-75'}
            to={'https://nstu.ru/'}
          >
            Официальный сайт
          </Link>
        </div>
        <div className={'flex flex-col gap-2'}>
          <div className={'text-lg font-black'}>Контакты:</div>
          <Link
            className={
              'flex items-center gap-1 transition-opacity hover:opacity-75'
            }
            to={'mailto:neti.career@yandex.ru'}
          >
            <Envelope color={'#ffffff'} size={24} />
            <div>neti.career@yandex.ru</div>
          </Link>
          {/*<Link*/}
          {/*  className={*/}
          {/*    'flex items-center gap-1 transition-opacity hover:opacity-75'*/}
          {/*  }*/}
          {/*  to={'tel:89132364716'}*/}
          {/*>*/}
          {/*  <PhoneIncoming color={'#ffffff'} size={24} />*/}
          {/*  <div>+7 (913) 236 47-16</div>*/}
          {/*</Link>*/}
          <div className={'flex items-center gap-1'}>
            <MapPin color={'#ffffff'} size={24} />
            <div className={'max-w-[350px]'}>
              Новосибирская обл., г. Новосибирск, пр-кт Карла Маркса, д. 20
            </div>
          </div>
        </div>
      </div>
      <div className={'flex items-center justify-between px-6 py-3'}>
        <div className={'text-center text-stone-400 md:text-left'}>© 2025</div>
        <div className={'text-center text-sm text-stone-400 md:text-left'}>
          produced by{' '}
          <Link to={'https://github.com/zyabl1k'} className={'underline'}>
            zyabl1k
          </Link>
        </div>
      </div>
    </footer>
  )
}
