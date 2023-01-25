import { Game }   from '../../utils/types'
import { TdCell } from './TdCell'

interface TableRowProps {
game:Game
}

export const TableRow = ({ game }: TableRowProps) => {
  const {
    date, stadium, status, homeTeam, awayTeam, winner,halfScore,fullScore
  } = game

  const rowTable = [date, stadium, homeTeam, awayTeam, halfScore, fullScore]
  const isLabeled = (label: string) => [homeTeam, awayTeam].includes(label)

  const colorCell = (label: string): string | undefined => {
    if (!isLabeled(label) || status === 'postponed') return
    if (!winner) return 'bg-orange-300'
    return label === winner.name ? 'bg-green-500' : 'bg-red-500'
  }

  return (
    <tr>
      {
        rowTable.map((label,i)=>(
          <TdCell key={i} className={colorCell(label)}>{label}</TdCell>
        ))
      }
      {/*<td className="border border-slate-300 py-2">{date}</td>*/}
      {/*<td className="border border-slate-300 py-2">{stadium}</td>*/}
      {/*<td className="border border-slate-300 py-2">{homeTeam}</td>*/}
      {/*<td className="border border-slate-300 py-2">{awayTeam}</td>*/}
      {/*<td className="border border-slate-300 py-2 uppercase">{halfScore}</td>*/}
      {/*<td className="border border-slate-300 py-2 uppercase">{fullScore}</td>*/}
    </tr>
  )
}
