import { lazy } from 'react'
import { __APPLICATION__ } from '@/shared/config'
import { Route, Routes } from 'react-router-dom'

const MainView = lazy(() => import('./main/ui/main.view'))
const TestsView = lazy(() => import('./tests/ui/tests.view.tsx'))
const TestView = lazy(() => import('./test/ui/test.view.tsx'))
const HelpView = lazy(() => import('./help/ui/help.view.tsx'))
const CommandView = lazy(() => import('./command/ui/command.view.tsx'))
const NotFoundView = lazy(() => import('./not-found/ui/not-found.view'))

export const Routing = () => {
  const { routes } = __APPLICATION__

  return (
    <Routes>
      <Route path={routes.origin} element={<MainView />} />
      <Route path={routes.tests} element={<TestsView />} />
      <Route path={routes.test} element={<TestView />} />
      <Route path={routes.help} element={<HelpView />} />
      <Route path={routes.command} element={<CommandView />} />
      <Route path={routes.any} element={<NotFoundView />} />
    </Routes>
  )
}
