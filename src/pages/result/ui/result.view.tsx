import { useParams } from 'react-router-dom'
import NotFoundView from '@/pages/not-found/ui/not-found.view.tsx'
import { results } from '@/shared/constants'

const ResultView = () => {
  const { id } = useParams()

  if (!id) {
    return <NotFoundView />
  }

  const result = results.find((result) => result.id === Number(id))

  if (!result) {
    return <NotFoundView />
  }

  return (
    <div className={'wrapper mt-[var(--header-height)]'}>
      <section className={'pt-12'}>
        <h1 className={'text-4xl font-black'}>{result.title}</h1>
        <h2 className={'italic'}>{result.announce}</h2>
        <p className={'mt-14'}>{result.description}</p>
      </section>
    </div>
  )
}

export default ResultView
