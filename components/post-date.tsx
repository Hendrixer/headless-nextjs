import { parseISO, format } from 'date-fns'

export default function PostDate({ dateString }: {
  dateString: string
}) {
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, 'MMM d, yyyy')}</time>
}
