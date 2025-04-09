import { IQuestion } from '@types'
import { cn } from '@/shared/lib/tailwind.ts'

type QuestionCardProps = {
  question_id: number
  selected: boolean
  onSelect: (question_id: number, answer_id: number) => void
} & IQuestion

export const QuestionCard = ({
  id,
  title,
  question_id,
  onSelect,
  selected,
}: QuestionCardProps) => {
  return (
    <button
      className={cn(
        'mx-auto h-[200px] w-full max-w-[380px] rounded-2xl p-4 text-center shadow-lg transition hover:shadow-2xl',
        selected && 'ring-2 ring-root-red-main'
      )}
      onClick={() => onSelect(question_id, id)}
    >
      <div className={'text-2xl font-bold'}>{title}</div>
    </button>
  )
}
