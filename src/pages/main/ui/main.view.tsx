import { Link } from 'react-router-dom'

const MainView = () => {
  return (
    <div className={'flex flex-col'}>
      <section className={'flex h-screen flex-col items-center justify-center'}>
        <h1 className={'text-6xl font-bold'}>Карьерный Компас НЭТИ</h1>
        <h2 className={'mt-2 text-lg font-medium italic'}>
          Помощь с выбором профессии от НГТУ НЭТИ
        </h2>
      </section>
      <section
        className={'wrapper mb-[var(--section-spacing)] grid grid-cols-2'}
      >
        <div></div>
        <div className={'flex flex-col gap-4'}>
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
