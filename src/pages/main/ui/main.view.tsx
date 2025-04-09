import { Link } from 'react-router-dom'
import { AnimateBg } from '@/shared/ui/animate-bg.tsx'
import animationData from '../../../../lottie/mission.json'
import Lottie from 'react-lottie'

const MainView = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  return (
    <div className={'flex flex-col'}>
      <section
        className={
          'relative flex h-screen flex-col items-center justify-center'
        }
      >
        <h1 className={'text-center text-6xl font-bold'}>
          Карьерный Компас НЭТИ
        </h1>
        <h2 className={'mt-2 text-center text-lg font-medium italic'}>
          Помощь с выбором профессии от НГТУ НЭТИ
        </h2>
        <AnimateBg />
      </section>
      <section
        className={'sm:wrapper mb-12 grid h-[80vh] items-center lg:grid-cols-2'}
      >
        <Lottie options={defaultOptions} height={388} width={388} />
        <div className={'wrapper flex flex-col gap-4'}>
          <div className={'text-4xl font-black'}>Миссия проекта</div>
          <p>
            Наш сайт поможет вам определиться с выбором будущей профессии и
            подскажет, какие направления подготовки, подходящие именно вам, есть
            в нашем вузе.
          </p>
          <Link
            to={'/test/1'}
            className={
              'mt-2 w-fit rounded-xl bg-root-red-main p-4 text-white transition-all hover:scale-105'
            }
          >
            Пройди тест на профориентацию
          </Link>
        </div>
      </section>
    </div>
  )
}

export default MainView
