import { ReactNode } from 'react'
import ReactDOM from 'react-dom/client'

/**
 * @Core
 */

type ApplicationComponent = () => ReactNode

interface Applications {
  ApplicationComponent: ApplicationComponent
  LoadingComponent: ApplicationComponent
}

interface CoreConfiguration {
  ApplicationDOMNode: () => HTMLDivElement
  ApplicationComponent: ApplicationComponent
  ApplicationReactDOM: ReactDOM.Root | null
}

/**
 * @Config
 */

interface __APPLICATION_CONFIG__ {
  routes: Readonly<{
    origin: string
    results: string
    tests: string
    result: string
    test: string
    command: string
    help: string
    any: string
  }>
}

/**
 * @Tests
 */

interface ITestResult {
  id: number
  test_id: number
  title: string
  announce: string
  description: string
  requiredAnswers: number[]
}

interface IQuestion {
  id: number
  title: string
}

interface ITestQuestion {
  step: number
  block: IQuestion[]
}

interface ITest {
  id: number
  title: string
  description: string
  image: string
  questions: ITestQuestion[]
  results: ITestResult[]
}
