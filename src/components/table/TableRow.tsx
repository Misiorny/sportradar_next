// import { ReactNode } from 'react'
import { TdCell }    from './TdCell'

// interface TableRowProps {
  // status: 'closed' | 'postponed'
  // children: ReactNode;
// }

export const TableRow = () => {
  // const isLabeled = (label: string) => [home.name, away.name].includes(label);
  // const colorCell = (label: string): string | undefined => {
  //   if (!isLabeled(label) || status === 'postponed') return
  //   if (!winner) return 'bg-orange-300'
  //   return label === winner.name ? 'bg-green-500' : 'bg-red-500'
  // }
  return (
    <tr>
      <TdCell/>
    </tr>

  )
}
