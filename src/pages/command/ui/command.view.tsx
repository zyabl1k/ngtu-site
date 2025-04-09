import { command } from '../model'
import { cn } from '@/shared/lib/tailwind.ts'

const CommandView = () => {
  return (
    <div className={'wrapper my-[var(--header-height)] pt-12'}>
      <h1 className={'text-5xl font-bold'}>Команда нашего проекта</h1>
      <div className={'mx-auto mt-12 flex max-w-[1100px] flex-col gap-y-12'}>
        {command.map((item, index) => (
          <div
            className={'flex items-center justify-between gap-2'}
            key={index}
          >
            <div
              className={cn(
                'hidden w-96 text-left text-xl italic',
                index % 2 !== 0 && 'block'
              )}
            >
              {item.description}
            </div>
            <div className={'flex flex-col'}>
              <img
                width={350}
                className={'rounded-xl'}
                src={`/imgs/${item.img_link}`}
                alt={'Морозова'}
              />
              <div className={'mt-2 text-xl font-black'}>{item.name}</div>
              <p className={'italic'}>{item.role}</p>
            </div>
            <div
              className={cn(
                'block w-96 text-right text-xl italic',
                index % 2 !== 0 && 'hidden'
              )}
            >
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CommandView
