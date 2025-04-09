import { tests } from '@/shared/constants'
import { TestCard } from '@/features/manage-tests'

const TestsView = () => {
  return (
    <div className={'wrapper mt-[var(--header-height)]'}>
      <section className={'pt-12'}>
        <h1 className={'text-4xl font-black'}>Тесты</h1>
        <h2 className={'italic'}>Здесь находятся все доступные тесты.</h2>
      </section>
      <section className={'my-[var(--section-spacing)] grid grid-cols-3 gap-6'}>
        {tests.map((test) => {
          return <TestCard {...test} />
        })}
      </section>
    </div>
  )
}

export default TestsView
