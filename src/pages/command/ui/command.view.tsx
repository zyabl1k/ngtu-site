const CommandView = () => {
  return (
    <div className={'wrapper mt-[calc(50px+var(--header-height))]'}>
      <h1 className={'text-5xl font-bold'}>Команда нашего проекта</h1>
      <img
        className={'mx-auto mt-6'}
        src={'/imgs/command.png'}
        alt={'Наша команда'}
      />
    </div>
  )
}

export default CommandView
