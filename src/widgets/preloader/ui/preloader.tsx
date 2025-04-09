import Logo from '/logo.png'

export const Preloader = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <img className={'animate-scale-min size-28'} src={Logo} alt={'НГТУ'} />
    </div>
  )
}
