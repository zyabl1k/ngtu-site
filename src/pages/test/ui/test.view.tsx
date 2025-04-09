import { useParams } from 'react-router-dom'
import NotFoundView from '@/pages/not-found/ui/not-found.view.tsx'
import { tests } from '@/shared/constants'
import { useEffect, useState } from 'react'
import { ITestQuestion } from '@types'
import { QuestionCard } from '@/features/manage-tests'

interface IAnswerStateProps {
  question_id: number
  answer_id: number
}

const TestView = () => {
  const { id } = useParams()
  const [step, setStep] = useState<number>(1)
  const [nowQuestion, setNowQuestion] = useState<ITestQuestion | undefined>()
  const [answers, setAnswers] = useState<IAnswerStateProps[]>([])

  if (!id) {
    return <NotFoundView />
  }

  const test = tests.find((test) => test.id === Number(id))

  if (!test) {
    return <NotFoundView />
  }

  const totalQuestions = test.questions.length

  useEffect(() => {
    setNowQuestion(test.questions.find((question) => question.step === step))
  }, [step, setStep])

  if (!nowQuestion) {
    return <NotFoundView />
  }

  const handleNextStep = () => {
    const hasAnswer = answers.some((a) => a.question_id === step)

    if (!hasAnswer) {
      alert('Пожалуйста, выберите ответ перед переходом к следующему вопросу')
      return
    }

    if (totalQuestions > step) setStep(step + 1)
    else if (totalQuestions === step) handleEndTest()
  }

  const handleEndTest = () => {}

  const handlePrevStep = () => {
    if (step !== 1) setStep(step - 1)
  }

  const calculateProgress = () => {
    if (totalQuestions <= 0 || step < 1 || step > totalQuestions) {
      return 0
    }

    const percentage = (step / totalQuestions) * 100
    return percentage.toFixed(2)
  }

  const handleAnswerSelect = (question_id: number, answer_id: number) => {
    setAnswers((prevAnswers) => {
      const filtered = prevAnswers.filter((a) => a.question_id !== question_id)
      return [...filtered, { question_id, answer_id }]
    })
  }

  return (
    <div className={'wrapper mt-[var(--header-height)]'}>
      <section className={'overflow-hidden rounded-2xl bg-root-red-main'}>
        <img className={'w-full'} src={test.image} alt={test.title} />
        <div className={'p-4 text-white'}>
          <h1 className={'text-2xl font-black'}>{test.title}</h1>
          <h2 className={'italic'}>{test.description}</h2>
        </div>
      </section>
      <section className={'mt-[var(--header-height)] text-center'}>
        <div className={'text-4xl font-black'}>
          Из каждой пары видов деятельности выберите один, наиболее
          предпочтительный для вас
        </div>
        <p className={'mt-2 text-lg italic'}>
          Предположим, что после соответствующего обучения Вы сможете выполнить
          любую работу. Но если бы Вам пришлось выбирать только из двух
          возможностей, что бы Вы предпочли?
        </p>
      </section>
      <section className={'my-[var(--header-height)]'}>
        <div className={'h-2.5 w-full rounded-full bg-gray-200'}>
          <div
            className={'h-2.5 rounded-full bg-root-red-main transition-all'}
            style={{ width: `${calculateProgress()}%` }}
          ></div>
        </div>
        <div className={'mt-8 grid gap-8 sm:grid-cols-2'}>
          {nowQuestion?.block.map((block) => (
            <QuestionCard
              key={block.id}
              {...block}
              question_id={nowQuestion.step}
              onSelect={handleAnswerSelect}
              selected={answers.some(
                (a) =>
                  a.question_id === nowQuestion.step && a.answer_id === block.id
              )}
            />
          ))}
        </div>
        <div className={'mt-14 flex items-center justify-center gap-8'}>
          <button
            onClick={handlePrevStep}
            className={'rounded-lg bg-root-red-main p-4 text-white'}
          >
            Назад
          </button>
          <label className={'text-lg font-medium'}>
            {step} / {test.questions.length}
          </label>
          <button
            onClick={handleNextStep}
            className={'rounded-lg bg-root-red-main p-4 text-white'}
          >
            Далее
          </button>
        </div>
      </section>
    </div>
  )
}

export default TestView
