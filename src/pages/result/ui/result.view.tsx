import { Link, useParams } from 'react-router-dom'
import NotFoundView from '@/pages/not-found/ui/not-found.view.tsx'
import { results } from '@/shared/constants'
import { parseDescription } from '../model/parse-description.ts'

const ResultView = () => {
  const { id } = useParams()

  if (!id) {
    return <NotFoundView />
  }

  const result = results.find((result) => result.id === Number(id))

  if (!result) {
    return <NotFoundView />
  }

  const parsedDescription = parseDescription(result.description)
  const paragraphs = parsedDescription.map(({ title, text, index }) => (
    <div key={index} className="flex items-start gap-x-4">
      <div className="flex flex-col gap-y-4">
        {title && <h1 className="mt-4 text-2xl font-semibold">{title}</h1>}
        <p className="whitespace-pre-line text-lg">{text}</p>
      </div>
    </div>
  ))

  return (
    <div className={'wrapper mt-[var(--header-height)]'}>
      <section className={'pt-12'}>
        <h1 className={'text-4xl font-black'}>{result.title}</h1>
        <h2 className={'mt-1 italic'}>{result.announce}</h2>
        <p className={'mt-10'}>{paragraphs}</p>
      </section>
      <section className={'py-12'}>
        <div className={'text-4xl font-bold'}>
          Факультеты и направления подготовки в{' '}
          <span className={'font-black text-root-red-main'}>НГТУ</span>:
        </div>
        <div
          className={'mt-6 grid gap-x-12 gap-y-8 md:grid-cols-2 lg:grid-cols-3'}
        >
          {result.links.map((link, index) => (
            <div key={index}>
              <div className={'text-xl font-semibold'}>{link.title}:</div>
              <div className={'mt-2 flex flex-col gap-2'}>
                {link.blocks.map((block, index) => (
                  <Link
                    key={index}
                    className={
                      'w-fit rounded-md bg-root-red-main p-2 text-white transition hover:opacity-80'
                    }
                    target={'_blank'}
                    to={block.link}
                  >
                    {block.description}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default ResultView
