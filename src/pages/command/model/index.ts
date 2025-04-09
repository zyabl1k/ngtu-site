interface ICommand {
  name: string
  img_link: string
  role: string
  description: string
}

export const command: ICommand[] = [
  {
    img_link: '1.jpg',
    name: 'Саидова Алина',
    role: 'Вдохновитель',
    description:
      'Соотнесение результатов теста с направлениями подготовки в НГТУ',
  },
  {
    img_link: '2.jpg',
    name: 'Морозова Виктория',
    role: 'Мотиватор',
    description: 'Реклама, дизайн сайта',
  },
  {
    img_link: '3.jpg',
    name: 'Клементьева Илона',
    role: 'Рабочая пчелка',
    description: 'Презентация',
  },
  {
    img_link: '4.jpg',
    name: 'Юрченко Арина',
    role: 'Рабочая пчелка',
    description:
      'Соотнесение результатов теста с направлениями подготовки в НГТУ, расчет себестоимости',
  },
  {
    img_link: '5.jpg',
    name: 'Огиенко Ксения',
    role: 'Вдохновитель',
    description:
      'Соотнесение результатов теста с направлениями подготовки в НГТУ, обратная связь',
  },
  {
    img_link: '6.jpg',
    name: 'Поваляев Артем',
    role: 'Генератор идей',
    description: 'Разработка и поддержка сайта',
  },
  {
    img_link: '7.jpg',
    name: 'Солдатова Виктория',
    role: 'Контролер',
    description: 'Расчет себестоимости, отчет, обратная связь',
  },
  {
    img_link: '8.jpg',
    name: 'Кобелев Даниил',
    role: 'Программист, волонтер',
    description: 'Разработка и поддержка сайта',
  },
]
