import { __APPLICATION__ } from '@/shared/config'

const routes = __APPLICATION__.routes

interface INavigation {
  label: string
  link: string
}

export const navigation: INavigation[] = [
  {
    label: 'Тесты',
    link: routes.tests,
  },
  {
    label: 'Команда проекта',
    link: routes.command,
  },
  {
    label: 'Поддержка',
    link: routes.help,
  },
]
