interface Paragraph {
  title: string | null
  text: string
  index: number
}

export const parseDescription = (description: string): Paragraph[] => {
  return description
    .split('\n')
    .reduce<Paragraph[]>((acc, paragraph, index) => {
      const trimmedLine = paragraph.trim() // Удаляем пробелы в начале/конце строки
      const match = trimmedLine.match(/^(.*?):/)
      const title = match ? match[1] : null
      const textWithoutTitle = title
        ? trimmedLine.replace(/^(.*?):\s*/, '')
        : trimmedLine

      if (title) {
        acc.push({ title, text: textWithoutTitle, index })
      } else if (acc.length > 0) {
        const last = acc[acc.length - 1]
        if (textWithoutTitle.startsWith('·')) {
          last.text += `\n${textWithoutTitle}` // Добавляем с переносом без пробелов
        } else {
          last.text += ` ${textWithoutTitle}`
        }
      } else {
        acc.push({ title: null, text: textWithoutTitle, index })
      }
      return acc
    }, [])
}
