import { results } from '@/shared/constants'
import { ResultCard } from '@/features/manage-result'

const ResultsView = () => {
  return (
    <div className={'wrapper mt-[var(--header-height)]'}>
      <section className={'pt-12'}>
        <h1 className={'text-4xl font-black'}>Результаты тестов</h1>
        <h2 className={'italic'}>
          Здесь находятся все доступные результаты для каждого теста.
        </h2>
      </section>
      <section className={'my-[var(--section-spacing)] grid grid-cols-3 gap-6'}>
        {results.map((result) => {
          return <ResultCard {...result} />
        })}
      </section>
    </div>
  )
}

export default ResultsView
