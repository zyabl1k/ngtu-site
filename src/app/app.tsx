import { withProviders } from '@/app/providers'
import { Routing } from '@/pages'
import { Header } from '@/widgets/header'
import { Footer } from '@/widgets/footer'

export const App = () => {
  return withProviders(() => {
    return (
      <div className="h-full w-full overflow-y-auto">
        <Header />
        <main className={'min-h-screen overflow-x-hidden'}>
          <Routing />
        </main>
        <Footer />
      </div>
    )
  })()
}
